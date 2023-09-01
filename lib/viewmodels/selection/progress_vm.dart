import 'package:flutter/material.dart';
import 'package:flutter_gen/gen_l10n/app_localizations.dart';
import 'package:injectable/injectable.dart';

import '../../model/base/song.dart';
import '../../repository/db_repository.dart';
import '../../repository/local_storage.dart';
import '../../repository/web_repository.dart';
import '../../utils/constants/pref_constants.dart';
import '../../utils/utilities.dart';

@injectable
class ProgressVm with ChangeNotifier {
  late final ProgressNavigator navigator;
  final WebRepository api;
  final DbRepository db;
  final LocalStorage localStorage;

  int progress = 0;
  String state = '';
  String time = '00:00';

  ProgressVm(this.api, this.db, this.localStorage);

  AppLocalizations? tr;
  bool isBusy = false, hasError = false, onBoarded = false;
  String errorTitle = "", errorBody = "";
  String selectedBooks = "", predistinatedBooks = "";
  List<Song>? songs = [];
  List<String> newBooks = [], oldBooks = [], predistinated = [], selected = [];
  List<int> bookNos = [];

  Future<void> init(ProgressNavigator screenNavigator) async {
    navigator = screenNavigator;

    onBoarded = localStorage.getPrefBool(PrefConstants.onboardedCheckKey);
    selectedBooks = localStorage.getPrefString(PrefConstants.selectedBooksKey);
    predistinatedBooks =
        localStorage.getPrefString(PrefConstants.predistinatedBooksKey);

    if (predistinatedBooks.isNotEmpty) {
      isBusy = true;
      notifyListeners();
      await db.majorCleanUp(selectedBooks);
    }

    await fetchSongs();
  }

  /// Get the list of songs and save theme
  Future<void> fetchSongs() async {
    isBusy = true;
    notifyListeners();

    selected = selectedBooks.split(",");
    for (final select in selected) {
      bookNos.add(int.parse(select));
    }
    //songs = await api.fetchSongs(bookNos);

    if (await isConnected()) {
      /*var response = await api.fetchSongs(bookNos);
      var resp = jsonDecode(response.body);

      if (response.statusCode == 200) {
        //payslipResp = PaySlipResponse.fromJson(resp['response']);
      }*/

      /*if (response.id == EventConstants.requestSuccessful) {
        Song song = Song();
        songs = song.fromData(response.data);

        if (songs!.isNotEmpty) {
          await saveSongs();
        } else {
          hasError = true;
        }
      } else {
        hasError = true;
      }*/
    } else {
      hasError = true;
      errorTitle = tr!.noConnection;
      errorBody = tr!.noConnectionBody;
    }

    isBusy = false;
    notifyListeners();
  }

  /// Get the list of songs and save theme
  Future<void> saveSongs() async {
    isBusy = false;
    notifyListeners();

    if (songs!.isNotEmpty) {
      for (int i = 0; i < songs!.length; i++) {
        try {
          progress = (i / songs!.length * 100).toInt();

          switch (progress) {
            case 1:
              state = "On your\nmarks ...";
              break;
            case 5:
              state = "Set,\nReady ...";
              break;
            case 10:
              state = "Loading\nsongs ...";
              break;
            case 20:
              state = "Patience\npays ...";
              break;
            case 40:
              state = "Loading\nsongs ...";
              break;
            case 75:
              state = "Thanks for\nyour patience!";
              break;
            case 85:
              state = "Finishing up";
              break;
            case 95:
              state = "Almost done";
              break;
          }
          notifyListeners();

          await db.saveSong(songs![i]);
        } catch (_) {}
      }
    }

    localStorage.setPrefBool(PrefConstants.dataLoadedCheckKey, true);
    localStorage.setPrefBool(PrefConstants.wakeLockCheckKey, true);

    if (onBoarded) {
      navigator.goToHome();
    } else {
      navigator.goToOnboarding();
    }
  }
}

abstract class ProgressNavigator {
  void goToHome();
  void goToOnboarding();
}