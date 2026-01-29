export const SpecialOTRequestSelector = {
  // ===== Left menu =====
  menuTimeSystem: '//*[@id="leftbar1_TimeAttendance"]/div[1]/img',
  menuOTRequestRecord: '//*[@id="leftbar1_lblleft_Time_OTNormal"]',

  // ===== OT Type =====
  dropdownOTType: '//*[@id="ctl00_dropdown_ddlMenu"]/span',
  optionSpecialOT:
    '//*[@id="ctl00_dropdown_ddlMenu_DropDown"]/div/ul/li[3]',


  // ===== Scope =====
  // ทั้งหมด
  adademy:
   '//*[@id="ctl00_ContentTitleRight_RadToolBar1"]/div/div/div/ul/li[1]/a',
  scopeAllRadio:
    '//*[@id="MainContent_Panel1"]/div/div/div[1]/div[1]/fieldset/div[1]/div[1]/label/span',

  // รหัสพนักงาน
  scopeEmpCodeRadio:
    '//*[@id="MainContent_Panel1"]/div/div/div[1]/div[1]/fieldset/div[2]/div[1]/label/span',

  // เลือกกลุ่มข้อมูล
  scopeGroupRadio:
    '//*[@id="MainContent_Panel1"]/div/div/div[1]/div[1]/fieldset/div[3]/div[1]/label/span',

  // ===== รหัสพนักงาน: จาก / ถึง =====
  // dropdown input (คุณใส่มาแล้ว ถูกต้อง)
  empFromDropdown: '//*[@id="ctl00_MainContent_mccS_Emp_Input"]',
  empToDropdown: '//*[@id="ctl00_MainContent_mccE_Emp_Input"]',

  // ✅ แก้เฉพาะรูปแบบ XPath ให้ถูก (ยังใช้ id เดิมของคุณ)
  empFromOption: (text: string) =>
    `//*[@id="ctl00_MainContent_mccS_Emp_DropDown"]//li[normalize-space()='${text}']`,

  empToOption: (text: string) =>
    `//*[@id="ctl00_MainContent_mccE_Emp_DropDown"]//li[normalize-space()='${text}']`,

  // ===== เลือกกลุ่มข้อมูล =====
  // dropdown input (คุณยังไม่ได้ใส่ XPath จริง)
  dropdownGroup: '//*[@id="ctl00_MainContent_mcc_SelectGroup_Input"]',

  // option กลุ่มข้อมูล (ใส่ text ตอนเรียก)
  groupOption: (text: string) =>
    `//*[@id="ctl00_MainContent_mcc_SelectGroup_DropDown"]/div[2]/ul/li[5]("${text}")`,

  // ===== เลือกข้อมูล: จาก / ถึง =====
  // dropdown input (คุณใส่มาแล้ว ถูกต้อง)
  dataFromDropdown:
    '//*[@id="ctl00_MainContent_mcc_SelectGroup_Input"]',

  // ✅ แก้รูปแบบ XPath ให้ถูก (ใช้ id เดิม)
  dataFromOption: (text: string) =>
    `//*[@id="ctl00_MainContent_mcc_SelectGroup_DropDown"]//li[normalize-space()='${text}']`,

  // ===== Date =====
  openCalendarBtn: '//*[@id="MainContent_ccbDate"]',
//calendarDay: 'MainContent_ccbDat',

  // ===== OT Time =====
  ot1: '//*[@id="ctl00_MainContent_mkeOT1"]',
  ot15: '//*[@id="ctl00_MainContent_mkeOT2"]',
  ot2: '//*[@id="ctl00_MainContent_mkeOT3"]',
  ot25: '//*[@id="ctl00_MainContent_mkeOT4"]5',
  ot3: '//*[@id="ctl00_MainContent_mkeOT5"]',
  ot6: '//*[@id="ctl00_MainContent_mkeOT6"]',

  // ===== Money / Remark =====
  otAmount: '//*[@id="ctl00_MainContent_txt_Shift"]',
  otFood: '//*[@id="ctl00_MainContent_txt_Food"]',
  specialMoney: '//*[@id="ctl00_MainContent_txt_special"]',
  remark: '//*[@id="MainContent_txtNNmemo"]',

  // ===== Employee table =====
  employeeRow: (text: string) =>
    `//*[@id="ctl00_MainContent_gexPerson_ctl00__0"]/td[2]("${text}")`,
  arrowRight: '//*[@id="MainContent_btnRightLine"]',

  // ===== Save =====
  save: '//*[@id="ctl00_ContentTitleRight_RadToolBar1"]/div/div/div/ul/li[4]/a',
} as const;
