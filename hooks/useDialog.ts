import { RefObject, useCallback, useReducer, useRef } from "react";

type DialogState = {
  opened: boolean;
  ref: RefObject<HTMLDialogElement>;
  error: string;
};
type DialogAction = { type: "open" } | { type: "close" };

function reducer(state: DialogState, action: DialogAction): DialogState {
  switch (action.type) {
    case "open": {
      const _ref = state.ref;

      _ref.current?.showModal();

      return { opened: true, error: "", ref: _ref };
    }
    case "close": {
      const _ref = state.ref;

      _ref.current?.close();

      return { opened: false, error: "", ref: _ref };
    }
    default:
      return { opened: false, error: "", ref: state.ref };
  }
}

export const useDialog = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [state, dispatch] = useReducer(reducer, {
    opened: false,
    ref: dialogRef,
    error: "",
  });

  const openDialog = useCallback(() => {
    dispatch({ type: "open" });
  }, []);
  const closeDialog = useCallback(() => {
    dispatch({ type: "close" });
  }, []);

  return { ...state, isOpened: state.opened, openDialog, closeDialog };
};
