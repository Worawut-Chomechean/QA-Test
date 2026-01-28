export const SpecialOTRequestSelector = {
  sidebarMenuArea: '//*[@id="kt_aside_toggler"]',
  menuTimeSystem: '//*[@id="leftbar1_TAM1_005_01"]',
  menuOTRequestRecord: '//*[@id="leftbar1_TAM1_005_01',

  dropdownOTType: 'XPATH_DROPDOWN_OT_TYPE',
  optionSpecialOT: 'XPATH_OPTION_SPECIAL_OT',

  buttonAddEmployee: '//*[@id="ctl00_dropdown_ddlMenu"]/span',

  scopeGroupRadio: 'XPATH_SCOPE_GROUP',

  dropdownGroup: 'XPATH_GROUP_DROPDOWN',
  groupOption: (text: string) => `XPATH_GROUP_OPTION("${text}")`,

  dropdownFrom: 'XPATH_FROM',
  dropdownTo: 'XPATH_TO',
  dropdownOption: (text: string) => `XPATH_FROM_TO_OPTION("${text}")`,

  openCalendarBtn: 'XPATH_CALENDAR_OPEN',
  calendarDay: (day: string) => `XPATH_CALENDAR_DAY("${day}")`,

  ot3: 'XPATH_OT3',
  otAmount: 'XPATH_SHIFT',
  otFood: 'XPATH_FOOD',
  specialMoney: 'XPATH_SPECIAL',
  remark: 'XPATH_REMARK',

  employeeRow: (text: string) => `XPATH_EMP_ROW("${text}")`,
  arrowRight: 'XPATH_ARROW_RIGHT',

  save: 'XPATH_SAVE',
} as const;
