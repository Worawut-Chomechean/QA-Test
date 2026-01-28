export type SpecialOTScope =
  | { type: 'ทั้งหมด' }
  | { type: 'รหัสพนักงาน'; from: string; to: string }
  | { type: 'เลือกกลุ่มข้อมูล'; groupName: string; from: string; to: string };

export type SpecialOTForm = {
  startDate: string;

  // OT
  ot1?: string;
  ot15?: string;
  ot2?: string;
  ot25?: string;
  ot3?: string;
  ot6?: string;

  // ค่าอื่น ๆ
  otAmount?: string;
  otFood?: string;
  specialMoney?: string;
  remark?: string;
};

export type SpecialOTCase = {
  id: string;
  title: string;

  // Login
  username: string;
  password: string;

  // Flow: เมนู + ประเภท OT
  otType: 'การขอโอทีแบบพิเศษ';

  // เงื่อนไขฝั่งซ้าย (ขอบเขต)
  scope: SpecialOTScope;

  // กรอกฟอร์ม
  form: SpecialOTForm;

  // เลือกพนักงาน (เอา string จบ)
  employee: string;
};

export const SpecialOTTestCases: SpecialOTCase[] = [
  {
    id: 'TC01',
    title: 'ทั้งหมด + OT1/OT1.5 + พนักงาน 66006700008',
    username: 'admin',
    password: 'admin',
    otType: 'การขอโอทีแบบพิเศษ',
    scope: { type: 'ทั้งหมด' },
    form: {
      startDate: '31/01/2569',
      ot1: '05:00',
      ot15: '05:00',
    },
    employee: '66006700008 นาย ปัณณวัฒน์ กาลพัฒน์',
  },
  // {
  //   id: 'TC02',
  //   title: 'รหัสพนักงาน + OT1/OT1.5 + พนักงาน 66006700010',
  //   username: 'admin',
  //   password: 'admin',
  //   otType: 'การขอโอทีแบบพิเศษ',
  //   scope: { type: 'รหัสพนักงาน', from: '<<EMP_FROM>>', to: '<<EMP_TO>>' },
  //   form: {
  //     startDate: '27/01/2569',
  //     ot1: '05:00',
  //     ot15: '05:00',
  //   },
  //   employee: '66006700010 นายพิชยะ หุตะจูฑะ',
  // },
  // {
  //   id: 'TC03',
  //   title: 'เลือกกลุ่มข้อมูล(สถานที่ทำงาน) + OT3 + ค่า/อาหาร/เงินพิเศษ + พนักงาน 6700000001',
  //   username: 'admin',
  //   password: 'admin',
  //   otType: 'การขอโอทีแบบพิเศษ',
  //   scope: {
  //     type: 'เลือกกลุ่มข้อมูล',
  //     groupName: 'สถานที่ทำงาน',
  //     from: 'BKK-TKS-42 ไทเกอร์ซอฟท์ 1998 จำกัด',
  //     to: 'BKK-TKS-42 ไทเกอร์ซอฟท์ 1998 จำกัด',
  //   },
  //   form: {
  //     startDate: '27/01/2569',
  //     ot3: '03:00',
  //     otAmount: '500',
  //     otFood: '200',
  //     specialMoney: '200',
  //   },
  //   employee: '6700000001 นายสมศรี ใจดี',
  // },
  // {
  //   id: 'TC04',
  //   title: 'ทั้งหมด + OT1 + พนักงาน 11042',
  //   username: 'admin',
  //   password: 'admin',
  //   otType: 'การขอโอทีแบบพิเศษ',
  //   scope: { type: 'ทั้งหมด' },
  //   form: {
  //     startDate: '31/01/2569',
  //     ot1: '05:00',
  //   },
  //   employee: '11042 นาย วรวุฒิ ชมชื่น',
  // },
  // {
  //   id: 'TC05',
  //   title: 'ทั้งหมด + OT1.5 + พนักงาน A01',
  //   username: 'admin',
  //   password: 'admin',
  //   otType: 'การขอโอทีแบบพิเศษ',
  //   scope: { type: 'ทั้งหมด' },
  //   form: {
  //     startDate: '31/01/2569',
  //     ot15: '05:00',
  //   },
  //   employee: 'A01 นาย เอ ศูทย์หนึ่ง',
  // },
  // {
  //   id: 'TC06',
  //   title: 'ทั้งหมด + OT2 + พนักงาน A02',
  //   username: 'admin',
  //   password: 'admin',
  //   otType: 'การขอโอทีแบบพิเศษ',
  //   scope: { type: 'ทั้งหมด' },
  //   form: {
  //     startDate: '31/01/2569',
  //     ot2: '05:00',
  //   },
  //   employee: 'A02 นาย เอ ศูทย์สอง',
  // },
  // {
  //   id: 'TC07',
  //   title: 'ทั้งหมด + OT2.5 + พนักงาน A03',
  //   username: 'admin',
  //   password: 'admin',
  //   otType: 'การขอโอทีแบบพิเศษ',
  //   scope: { type: 'ทั้งหมด' },
  //   form: {
  //     startDate: '31/01/2569',
  //     ot25: '05:00',
  //   },
  //   employee: 'A03 นาย เอ ศูทย์สาม',
  // },
  // {
  //   id: 'TC08',
  //   title: 'ทั้งหมด + OT3 + พนักงาน A04',
  //   username: 'admin',
  //   password: 'admin',
  //   otType: 'การขอโอทีแบบพิเศษ',
  //   scope: { type: 'ทั้งหมด' },
  //   form: {
  //     startDate: '31/01/2569',
  //     ot3: '05:00',
  //   },
  //   employee: 'A04 นาย เอ ศูทย์สี่',
  // },
  // {
  //   id: 'TC09',
  //   title: 'ทั้งหมด + OT6 + พนักงาน A05',
  //   username: 'admin',
  //   password: 'admin',
  //   otType: 'การขอโอทีแบบพิเศษ',
  //   scope: { type: 'ทั้งหมด' },
  //   form: {
  //     startDate: '31/01/2569',
  //     ot6: '05:00',
  //   },
  //   employee: 'A05 นาย เอ ศูทย์ห้า',
  // },
  // {
  //   id: 'TC10',
  //   title: 'ทั้งหมด + ค่ากะโอที 500 + พนักงาน A08',
  //   username: 'admin',
  //   password: 'admin',
  //   otType: 'การขอโอทีแบบพิเศษ',
  //   scope: { type: 'ทั้งหมด' },
  //   form: {
  //     startDate: '31/01/2569',
  //     otAmount: '500',
  //   },
  //   employee: 'A08 นาย เอ ศูทย์แปด',
  // },
  // {
  //   id: 'TC11',
  //   title: 'ทั้งหมด + ค่าอาหารโอที 500 + พนักงาน A09',
  //   username: 'admin',
  //   password: 'admin',
  //   otType: 'การขอโอทีแบบพิเศษ',
  //   scope: { type: 'ทั้งหมด' },
  //   form: {
  //     startDate: '31/01/2569',
  //     otFood: '500',
  //   },
  //   employee: 'A09 นาย เอ ศูทย์เก้า',
  // },
  // {
  //   id: 'TC12',
  //   title: 'ทั้งหมด + เงินพิเศษ 500 + พนักงาน A10',
  //   username: 'admin',
  //   password: 'admin',
  //   otType: 'การขอโอทีแบบพิเศษ',
  //   scope: { type: 'ทั้งหมด' },
  //   form: {
  //     startDate: '31/01/2569',
  //     specialMoney: '500',
  //   },
  //   employee: 'A10 นาย เอ หนึ่งศูทย์',
  // },
  // {
  //   id: 'TC13',
  //   title: 'ทั้งหมด + OT1 + ค่ากะโอที 500 + พนักงาน B01',
  //   username: 'admin',
  //   password: 'admin',
  //   otType: 'การขอโอทีแบบพิเศษ',
  //   scope: { type: 'ทั้งหมด' },
  //   form: {
  //     startDate: '31/01/2569',
  //     ot1: '05:00',
  //     otAmount: '500',
  //   },
  //   employee: 'B01 นายบี ศูทย์หนึ่ง',
  // },
  // {
  //   id: 'TC14',
  //   title: 'ทั้งหมด + OT1.5 + ค่ากะโอที 500 + พนักงาน B02',
  //   username: 'admin',
  //   password: 'admin',
  //   otType: 'การขอโอทีแบบพิเศษ',
  //   scope: { type: 'ทั้งหมด' },
  //   form: {
  //     startDate: '31/01/2569',
  //     ot15: '05:00',
  //     otAmount: '500',
  //   },
  //   employee: 'B02 นายบี ศูทย์สอง',
  // },
  // {
  //   id: 'TC15',
  //   title: 'ทั้งหมด + OT2 + ค่ากะโอที 500 + พนักงาน B03',
  //   username: 'admin',
  //   password: 'admin',
  //   otType: 'การขอโอทีแบบพิเศษ',
  //   scope: { type: 'ทั้งหมด' },
  //   form: {
  //     startDate: '31/01/2569',
  //     ot2: '05:00',
  //     otAmount: '500',
  //   },
  //   employee: 'B03 นายบี ศูทย์สาม',
  // },
  // {
  //   id: 'TC16',
  //   title: 'ทั้งหมด + OT2.5 + ค่ากะโอที 500 + พนักงาน B04',
  //   username: 'admin',
  //   password: 'admin',
  //   otType: 'การขอโอทีแบบพิเศษ',
  //   scope: { type: 'ทั้งหมด' },
  //   form: {
  //     startDate: '31/01/2569',
  //     ot25: '05:00',
  //     otAmount: '500',
  //   },
  //   employee: 'B04 นายบี ศูทย์สี่',
  // },
  // {
  //   id: 'TC17',
  //   title: 'ทั้งหมด + OT3 + ค่ากะโอที 500 + พนักงาน B05',
  //   username: 'admin',
  //   password: 'admin',
  //   otType: 'การขอโอทีแบบพิเศษ',
  //   scope: { type: 'ทั้งหมด' },
  //   form: {
  //     startDate: '31/01/2569',
  //     ot3: '05:00',
  //     otAmount: '500',
  //   },
  //   employee: 'B05 นายบี ศูทย์ห้า',
  // },
  // {
  //   id: 'TC18',
  //   title: 'ทั้งหมด + OT1 + ค่ากะโอที 500 + ค่าอาหาร 1000 + พนักงาน B06',
  //   username: 'admin',
  //   password: 'admin',
  //   otType: 'การขอโอทีแบบพิเศษ',
  //   scope: { type: 'ทั้งหมด' },
  //   form: {
  //     startDate: '31/01/2569',
  //     ot1: '05:00',
  //     otAmount: '500',
  //     otFood: '1000',
  //   },
  //   employee: 'B06 นายบี ศูทย์หก',
  // },
  // {
  //   id: 'TC19',
  //   title: 'ทั้งหมด + OT1.5 + ค่ากะโอที 500 + ค่าอาหาร 1000 + พนักงาน B07',
  //   username: 'admin',
  //   password: 'admin',
  //   otType: 'การขอโอทีแบบพิเศษ',
  //   scope: { type: 'ทั้งหมด' },
  //   form: {
  //     startDate: '31/01/2569',
  //     ot15: '05:00',
  //     otAmount: '500',
  //     otFood: '1000',
  //   },
  //   employee: 'B07 นายบี ศูทย์เจ็ด',
  // },
  // {
  //   id: 'TC20',
  //   title: 'ทั้งหมด + OT2 + ค่ากะโอที 500 + ค่าอาหาร 1000 + พนักงาน B08',
  //   username: 'admin',
  //   password: 'admin',
  //   otType: 'การขอโอทีแบบพิเศษ',
  //   scope: { type: 'ทั้งหมด' },
  //   form: {
  //     startDate: '31/01/2569',
  //     ot2: '05:00',
  //     otAmount: '500',
  //     otFood: '1000',
  //   },
  //   employee: 'B08 นายบี ศูทย์แปด',
  // },
  // {
  //   id: 'TC21',
  //   title: 'ทั้งหมด + OT2.5 + ค่ากะโอที 500 + ค่าอาหาร 1000 + พนักงาน B09',
  //   username: 'admin',
  //   password: 'admin',
  //   otType: 'การขอโอทีแบบพิเศษ',
  //   scope: { type: 'ทั้งหมด' },
  //   form: {
  //     startDate: '31/01/2569',
  //     ot25: '05:00',
  //     otAmount: '500',
  //     otFood: '1000',
  //   },
  //   employee: 'B09 นายบี ศูทย์เก้า',
  // },
  // {
  //   id: 'TC22',
  //   title: 'ทั้งหมด + OT3 + ค่ากะโอที 500 + ค่าอาหาร 1000 + พนักงาน B10',
  //   username: 'admin',
  //   password: 'admin',
  //   otType: 'การขอโอทีแบบพิเศษ',
  //   scope: { type: 'ทั้งหมด' },
  //   form: {
  //     startDate: '31/01/2569',
  //     ot3: '05:00',
  //     otAmount: '500',
  //     otFood: '1000',
  //   },
  //   employee: 'B10 นายบี หนึ่งศูทย์',
  // },
  // {
  //   id: 'TC23',
  //   title: 'ทั้งหมด + OT6 + ค่ากะโอที 500 + ค่าอาหาร 1000 + พนักงาน C01',
  //   username: 'admin',
  //   password: 'admin',
  //   otType: 'การขอโอทีแบบพิเศษ',
  //   scope: { type: 'ทั้งหมด' },
  //   form: {
  //     startDate: '31/01/2569',
  //     ot6: '05:00',
  //     otAmount: '500',
  //     otFood: '1000',
  //   },
  //   employee: 'C01 นายซี ศูทย์หนึ่ง',
  // },
  // {
  //   id: 'TC24',
  //   title: 'ทั้งหมด + OT1.5 + ค่ากะโอที 500 + ค่าอาหาร 1000 + เงินพิเศษ 1000 + พนักงาน C02',
  //   username: 'admin',
  //   password: 'admin',
  //   otType: 'การขอโอทีแบบพิเศษ',
  //   scope: { type: 'ทั้งหมด' },
  //   form: {
  //     startDate: '31/01/2569',
  //     ot15: '05:00',
  //     otAmount: '500',
  //     otFood: '1000',
  //     specialMoney: '1000',
  //   },
  //   employee: 'C02 นายซี ศูทย์สอง',
  // },
  // {
  //   id: 'TC25',
  //   title: 'ทั้งหมด + OT2 + ค่ากะโอที 500 + ค่าอาหาร 1000 + เงินพิเศษ 1000 + พนักงาน C03',
  //   username: 'admin',
  //   password: 'admin',
  //   otType: 'การขอโอทีแบบพิเศษ',
  //   scope: { type: 'ทั้งหมด' },
  //   form: {
  //     startDate: '31/01/2569',
  //     ot2: '05:00',
  //     otAmount: '500',
  //     otFood: '1000',
  //     specialMoney: '1000',
  //   },
  //   employee: 'C03 นายซี ศูทย์สาม',
  // },
  // {
  //   id: 'TC26',
  //   title: 'ทั้งหมด + OT2.5 + ค่ากะโอที 500 + ค่าอาหาร 1000 + เงินพิเศษ 1000 + พนักงาน C04',
  //   username: 'admin',
  //   password: 'admin',
  //   otType: 'การขอโอทีแบบพิเศษ',
  //   scope: { type: 'ทั้งหมด' },
  //   form: {
  //     startDate: '31/01/2569',
  //     ot25: '05:00',
  //     otAmount: '500',
  //     otFood: '1000',
  //     specialMoney: '1000',
  //   },
  //   employee: 'C04 นายซี ศูทย์สี่',
  // },
  // {
  //   id: 'TC27',
  //   title: 'ทั้งหมด + OT3 + ค่ากะโอที 500 + ค่าอาหาร 1000 + เงินพิเศษ 1000 + พนักงาน C05',
  //   username: 'admin',
  //   password: 'admin',
  //   otType: 'การขอโอทีแบบพิเศษ',
  //   scope: { type: 'ทั้งหมด' },
  //   form: {
  //     startDate: '31/01/2569',
  //     ot3: '05:00',
  //     otAmount: '500',
  //     otFood: '1000',
  //     specialMoney: '1000',
  //   },
  //   employee: 'C05 นายซี ศูทย์ห้า',
  // },
  // {
  //   id: 'TC28',
  //   title: 'ทั้งหมด + OT6 + ค่ากะโอที 500 + ค่าอาหาร 1000 + เงินพิเศษ 1000 + พนักงาน C06',
  //   username: 'admin',
  //   password: 'admin',
  //   otType: 'การขอโอทีแบบพิเศษ',
  //   scope: { type: 'ทั้งหมด' },
  //   form: {
  //     startDate: '31/01/2569',
  //     ot6: '05:00',
  //     otAmount: '500',
  //     otFood: '1000',
  //     specialMoney: '1000',
  //   },
  //   employee: 'C06 นายซี ศูทย์หก',
  // },
  // {
  //   id: 'TC29',
  //   title: 'ทั้งหมด + OT6 + ค่ากะโอที 500 + ค่าอาหาร 1000 + หมายเหตุ + พนักงาน C06',
  //   username: 'admin',
  //   password: 'admin',
  //   otType: 'การขอโอทีแบบพิเศษ',
  //   scope: { type: 'ทั้งหมด' },
  //   form: {
  //     startDate: '31/01/2569',
  //     ot6: '05:00',
  //     otAmount: '500',
  //     otFood: '1000',
  //     remark: 'ทำโอทีหลังทำงาน',
  //   },
  //   employee: 'C06 นายซี ศูทย์หก',
  //  },
];
