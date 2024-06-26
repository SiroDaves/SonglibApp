part of 'selecting_screen.dart';

class SelectingScreenBodyDetails extends StatefulWidget {
  final SelectingScreenBodyState parent;
  const SelectingScreenBodyDetails({super.key, required this.parent});

  @override
  State<SelectingScreenBodyDetails> createState() =>
      SelectingScreenBodyDetailsState();
}

class SelectingScreenBodyDetailsState
    extends State<SelectingScreenBodyDetails> {
  void onBookSelected(int index, List<Selectable<Book>> listing) {
    try {
      setState(() {
        listing[index].isSelected = !listing[index].isSelected;

        if (listing[index].isSelected) {
          widget.parent.booksSelected.add(listing[index].data);
        } else {
          widget.parent.booksSelected.remove(listing[index].data);
        }
      });
    } catch (_) {
      logger('Unable to update selection');
    }
  }

  @override
  Widget build(BuildContext context) {
    AppLocalizations? tr = AppLocalizations.of(context)!;
    Size size = MediaQuery.of(context).size;
    bool isTabletOrIpad = size.shortestSide > 550;

    return BlocBuilder<SelectingBloc, SelectingState>(
      builder: (context, state) {
        var booksListWidget = isDesktop || isMobile && isTabletOrIpad
            ? LayoutBuilder(
                builder: (context, dimens) {
                  int axisCount = (dimens.maxWidth / 450).round();
                  return GridView.builder(
                    gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                      crossAxisCount: axisCount,
                      childAspectRatio: 4,
                    ),
                    itemCount: state.booksListing.length,
                    itemBuilder: (context, index) => BookItem(
                      item: state.booksListing[index],
                      onPressed: () =>
                          onBookSelected(index, state.booksListing),
                    ),
                  );
                },
              )
            : ListView.builder(
                itemCount: state.booksListing.length,
                itemBuilder: (context, index) => BookItem(
                  item: state.booksListing[index],
                  onPressed: () => onBookSelected(index, state.booksListing),
                ),
              );

        return SafeArea(
          child: Padding(
            padding: const EdgeInsets.all(Sizes.xs),
            child: Stack(
              children: [
                state.status == Status.inProgress
                    ? const SkeletonLoading()
                    : (state.status == Status.booksFetched &&
                            state.booksListing.isNotEmpty)
                        ? booksListWidget
                        : const SizedBox.shrink(),
                state.status == Status.failure
                    ? EmptyState(
                        title: emptyStateMessage(state.feedback, tr),
                        showRetry: true,
                        onRetry: () => context
                            .read<SelectingBloc>()
                            .add(const SelectingBooksFetch()),
                      )
                    : const SizedBox.shrink(),
              ],
            ),
          ),
        );
      },
    );
  }
}
