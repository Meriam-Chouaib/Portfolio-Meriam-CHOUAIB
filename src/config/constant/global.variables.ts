export const GlobalVariables = {
  BOOLEAN_TRUE: true,
  BOOLEAN_FALSE: false,

  NoDataLength: 0,
  FirstIndex: 0,
  NoIndex: -1,
  DataLengthOverLimitDisplay: '+99',
  DataLengthLimit: 99,
  SingleDataLength: 1,
  ManyDataLength: 2,
  EmptyString: '',
  TOKEN: 'token',
  EmptyJsonString: '{}',
  PlusString: '+',
  TRUE: 'true',
  FALSE: 'false',
  STRING: 'string',
  DATE: 'date',
  shortTextInputLength: 100,
  MIN: 'min',
  Required: 'required',
  RequiredSymbol: '*',

  DebounceTime: {
    Short: 100,
    ShortMedium: 300,
    Medium: 500,
    MediumLong: 1000,
    MediumVeryLong: 3000,
    VeryShortLong: 10000,
    ShortLong: 100000,
    Long: 300000,
  },

  Date: {
    DefaultFormat: 'DD/MM/YYYY',
    DefaultFormatShort: 'DD/MM/YY',
    DefaultFormatWithTime: 'DD/MM/YYYY HH:mm',
    DefaultFormatWithTimeWithDash: 'DD/MM/YYYY - HH:mm',
    DefaultStringFormatWithTime: 'DD/MM/YYYY - HH[h]mm',
    StringDateFormatShortDayWithTime: 'DD MMMM YYYY - HH[h]mm',
    StringDateFormatWithTime: 'dddd D MMMM YYYY - HH[h]mm',
    StringDateFormat: 'dddd DD MMMM',
    StringDateFormatWithYear: 'dddd DD MMMM YYYY',
    PointsDateFormat: 'DD.MM.YY',
    YearFormat: 'YYYY',
    MonthFormat: 'MMMM YYYY',
    TextFormat: 'DD MMM YYYY',
    FullTextFormat: 'DD MMMM YYYY',
    TimeFormat: 'HH:mm',
    TimeFormat2: 'HH[h]mm',
    TimeSecondsFormat: 'HH:mm:ss',
    TimeMinuteAndSecondsFormat: 'mm:ss',
    FullDateFormat: 'dddd DD MMMM YYYY',
    ISO8601DateFormat: 'YYYY-MM-DDT',
    ISO8601DateFormatWithTime: 'YYYY-MM-DDTHH:mm',
    MonthYearFormat: 'MMMM YYYY',
    WeekDateFormat: 'dddd D',
    DayMonthFormat: 'DD MMMM',
    DayMonthWithSlashFormat: 'DD/MM',
    FullMonthFormat: 'MMMM',
    HourInMinutes: 60,
  },

  Map: {
    MediumZoom: 10,
    DefaultZoom: 15,
    OpenMapZoom: 19,
    DefaultPosition: { lat: 48.856614, lng: 2.3522219 },
    MapLibraries: ['geometry', 'places'] as ('geometry' | 'places')[],
  },

  Inputs: {
    shortText: {
      minLength: 3,
      maxLength: 30,
    },
    longText: {
      minLength: 3,
      maxLength: 100,
    },
    veryLongText: {
      minLength: 3,
      maxLength: 500,
    },
    shortPassword: {
      minLength: 6,
    },
    name: {
      regex: /^[a-zA-ZÀ-ÿ\s']+$/,
    },
    password: {
      regex:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&$_=,:.;+-])[A-Za-z\d@$!%*?&$_=,:.;+-]{8,}$/,
    },
    phoneNumber: {
      min: 0,
      max: 30,
      minLength: 10,
      maxLength: 10,
      regex: /^[0-9]*$/,
    },
    number: {
      regex: /[^0-9.]+|(\..*?\.)+/g,
    },
  },

  Alerts: {
    DefaultDuration: 5000,
    ClearStateDuration: 5300,
  },

  CurrencySymbol: '€',
  NumberSign: '#',

  Percentage: '%',

  /* Pagination */
  Pagination: {
    ElementsPerPage: { min: 25, median: 50, max: 100 },
    RowsPerPage: 10,
    FirstPage: 1,
  },

  KeyDownTypes: {
    Enter: 'Enter',
    Escape: 'Escape',
  },

  File: {
    DefaultType: 'file',
    DefaultAccept: '*',
    DefaultAcceptType: ['*'],
    DefaultMaxSize: 10485760,
    ResizeMaxSize: 512000, // 500KB
    DefaultMaxSizeInMb: 10,
    maxFileListCount: 5,
    Image: {
      Type: 'file',
      MaxSize: 10485760,
      MaxSizeInMb: 10,
      AcceptType: ['.jpg', '.jpeg', '.png'],
      DefaultAlt: 'image',
    },
    Video: {
      Type: 'file',
      MaxSize: 62914560,
      MaxSizeInMb: 60,
      AcceptType: ['.mp4', '.avi'],
      DefaultAlt: 'video',
    },
    Pdf: {
      Type: 'file',
      MaxSize: 10485760,
      MaxSizeInMb: 10,
      AcceptType: ['.pdf'],
    },
    Audio: {
      Type: 'file',
      MaxSize: 10485760,
      MaxSizeInMb: 10,
      AcceptType: ['.mp3', '.mpeg'],
    },
    Document: {
      Type: 'file',
      MaxSize: 10485760,
      MaxSizeInMb: 10,
      AcceptType: ['.jpg', '.jpeg', '.png', 'gif', 'svg', '.pdf'],
    },
  },

  /* Inputs autocomplete */
  AUTOCOMPLETE_OFF: 'off',
  AUTOCOMPLETE_ON: 'on',
  AUTOCOMPLETE_EMAIL: 'email',
  AUTOCOMPLETE_CURRENT_PASSWORD: 'current-password',
  AUTOCOMPLETE_ON_NEW_PASSWORD: 'new-password',

  Calendar: {
    Views: {
      Month: 'Month',
      Week: 'Week',
    },
    WorkHours: {
      Min: '00:00:00',
      Max: '23:00:00',
    },
  },

  Link: {
    target: '_blank',
    rel: 'noopener noreferrer',
  },

  DEBOUNCE_TIME: 500,
  DEBOUNCE_TIME_LONG: 1000,
  DEBOUNCE_TIME_SHORT: 100,
}
