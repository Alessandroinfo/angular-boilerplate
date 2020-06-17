// ------------------------------------------------------- DIRECTIVES ------------------------------------------------------------------- //

export interface OlModel {
  style?: string;
  color?: string;
  size?: string;
}

export interface BoxLineModel {
  border?: {
    style?: string;
    color?: string;
    size?: string;
  };
  outline?: {
    style?: string;
    color?: string;
    size?: string;
  };
}

// ------------------------------------------------------- DIRECTIVES ------------------------------------------------------------------- //

// --------------------------------------------------------- SERVICES ------------------------------------------------------------------- //
export interface LoadingState {
  isLoading: boolean;
  blockOverlay: boolean;
  centerLoading: boolean;
  topLoading: boolean;
}

export interface LoadingHeaders {
  BLOCKOVERLAY: string;
  CENTERLOADER: string;
  TOPLOADER: string;
}

export interface AngularError {
  name: any;
  time: any;
  id: any;
  url: any;
  status: any;
  message: any;
  stack: any;
}

export interface LanguagesList extends Array<LanguageItem> {
}

export interface LanguageItem {
  code: string;
  label: string;
}

// --------------------------------------------------------- SERVICES ------------------------------------------------------------------- //


// ------------------------------------------------------- COMPONENTS ------------------------------------------------------------------- //
// ------------------------------------------------------- COMPONENTS ------------------------------------------------------------------- //


// ---------------------------------------------------------- PIPE ---------------------------------------------------------------------- //
// ---------------------------------------------------------- PIPE ---------------------------------------------------------------------- //

