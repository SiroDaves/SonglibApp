import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'package:flutter_gen/gen_l10n/app_localizations.dart';

import 'common/auth/auth_bloc.dart';
import 'common/theme/bloc/theme_bloc.dart';
import 'common/theme/theme_data.dart';
import 'common/utils/constants/pref_constants.dart';
import 'common/utils/date_util.dart';
import 'data/repository/auth_repository.dart';
import 'data/repository/local_storage.dart';
import 'di/injectable.dart';
import 'navigator/main_navigator.dart';
import 'navigator/route_names.dart';

class AppMainWindow extends StatefulWidget {
  final Widget? home;
  const AppMainWindow({super.key, this.home});

  @override
  State<AppMainWindow> createState() => AppMainWindowState();
}

class AppMainWindowState extends State<AppMainWindow> {
  final navigatorKey = MainNavigatorState.navigationKey;
  NavigatorState get navigator =>
      MainNavigatorState.navigationKey.currentState!;
  late final AuthRepository _authRepo;

  @override
  void initState() {
    super.initState();
    _authRepo = AuthRepository();
  }

  @override
  void dispose() {
    _authRepo.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    var localStorage = getIt<LocalStorage>();
    bool isSelected = localStorage.getPrefBool(PrefConstants.dataIsSelectedKey);
    bool isLoaded = localStorage.getPrefBool(PrefConstants.dataIsLoadedKey);

    return MultiBlocProvider(
      providers: [
        BlocProvider(
          create: (context) => ThemeBloc(),
        ),
        BlocProvider(
          create: (context) => AuthBloc(authRepo: _authRepo),
        ),
      ],
      child: BlocBuilder<ThemeBloc, ThemeMode>(
        builder: (context, themeMode) {
          return MaterialApp(
            home: widget.home,
            themeMode: localStorage.getThemeMode(),
            theme: AppTheme.lightTheme(),
            darkTheme: AppTheme.darkTheme(),
            supportedLocales: const [Locale('en'), Locale('sw')],
            debugShowCheckedModeBanner: false,
            navigatorKey: navigatorKey,
            initialRoute: MainNavigatorState.initialRoute,
            onGenerateRoute: MainNavigatorState.onGenerateRoute,
            localizationsDelegates: const [
              AppLocalizations.delegate,
              GlobalMaterialLocalizations.delegate,
              GlobalWidgetsLocalizations.delegate,
              GlobalCupertinoLocalizations.delegate,
            ],
            builder: (context, child) => BlocListener<AuthBloc, AuthState>(
              listener: (context, state) {
                switch (state.status) {
                  case AuthStatus.unauthenticated:
                    navigator.pushNamed<void>(RouteNames.signup);
                  case AuthStatus.unverified:
                    navigator.pushNamed<void>(RouteNames.login);
                  case AuthStatus.authenticated:
                    if (isLoaded) {
                      navigator.pushNamedAndRemoveUntil<void>(
                        RouteNames.home,
                        (route) => false,
                      );
                    } else {
                      if (isSelected) {
                        navigator.pushNamedAndRemoveUntil<void>(
                          RouteNames.saving,
                          (route) => false,
                        );
                      } else {
                        localStorage.setPrefString(
                          PrefConstants.dateInstalledKey,
                          dateNow(),
                        );

                        navigator.pushNamedAndRemoveUntil<void>(
                          RouteNames.selecting,
                          (route) => false,
                        );
                      }
                    }
                }
              },
              child: child,
            ),
          );
        },
      ),
    );
  }
}
