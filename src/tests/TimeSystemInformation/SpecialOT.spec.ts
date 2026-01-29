import { test } from '@playwright/test';

import { LoginPage } from '../../page/Login/Login';
import { Special_OT_Request } from '../../page/time system information/OT Request Record/Special OT Request/Special_OT_Request';
import { SpecialOTTestCases } from '../../testData/time system information/OTRequestrecord/Special OT Request/Ot Time Testdata';


test.describe.serial('Special OT Request - OT Time', () => {

    let loginPage: LoginPage;
    let specialOT: Special_OT_Request;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
         specialOT = new Special_OT_Request(page);
        // Refactor 1: ย้าย Logic ที่ทำซ้ำทุกข้อมาไว้ตรงนี้
        await loginPage.login();
        await specialOT.openPage();
    });

    test('TC001 Special OT Request - OT Time', async () => {
        await specialOT.addademy();
        await specialOT.fillForm(SpecialOTTestCases[0]);
        await specialOT.selectEmployee(SpecialOTTestCases[0].employee);
        await specialOT.save( )
    });
    test('TC002 Special OT Request - OT Time', async () => {
        await specialOT.addademy();
        await specialOT.fillForm(SpecialOTTestCases[1]);
        await specialOT.selectEmployee(SpecialOTTestCases[1].employee);
        await specialOT.save( )
    });
    test('TC003 Special OT Request - OT Time', async () => {
        await specialOT.addademy();
        await specialOT.fillForm(SpecialOTTestCases[2]);
        await specialOT.selectEmployee(SpecialOTTestCases[2].employee);
        await specialOT.save( )
    });
    test('TC04 Special OT Request - OT Time', async () => {
        await specialOT.addademy();
        await specialOT.fillForm(SpecialOTTestCases[3]);
        await specialOT.selectEmployee(SpecialOTTestCases[3].employee);
        await specialOT.save( )
    });
    test('TC005 Special OT Request - OT Time', async () => {
        await specialOT.addademy();
        await specialOT.fillForm(SpecialOTTestCases[4]);
        await specialOT.selectEmployee(SpecialOTTestCases[4].employee);
        await specialOT.save( )
    });
    test('TC006 Special OT Request - OT Time', async () => {
        await specialOT.addademy();
        await specialOT.fillForm(SpecialOTTestCases[5]);
        await specialOT.selectEmployee(SpecialOTTestCases[5].employee);
        await specialOT.save( )
    });
    test('TC007 Special OT Request - OT Time', async () => {
        await specialOT.addademy();
        await specialOT.fillForm(SpecialOTTestCases[6]);
        await specialOT.selectEmployee(SpecialOTTestCases[6].employee);
        await specialOT.save( )
    });
    test('TC008 Special OT Request - OT Time', async () => {
        await specialOT.addademy();
        await specialOT.fillForm(SpecialOTTestCases[7]);
        await specialOT.selectEmployee(SpecialOTTestCases[7].employee);
        await specialOT.save( )
    });
    test('TC009 Special OT Request - OT Time', async () => {
        await specialOT.addademy();
        await specialOT.fillForm(SpecialOTTestCases[8]);
        await specialOT.selectEmployee(SpecialOTTestCases[8].employee);
        await specialOT.save( )
    });
    test('TC010 Special OT Request - OT Time', async () => {
        await specialOT.addademy();
        await specialOT.fillForm(SpecialOTTestCases[9]);
        await specialOT.selectEmployee(SpecialOTTestCases[9].employee);
        await specialOT.save( )
    });
    test('TC011 Special OT Request - OT Time', async () => {
        await specialOT.addademy();
        await specialOT.fillForm(SpecialOTTestCases[10]);
        await specialOT.selectEmployee(SpecialOTTestCases[10].employee);
        await specialOT.save( )
    });
    test('TC012 Special OT Request - OT Time', async () => {
        await specialOT.addademy();
        await specialOT.fillForm(SpecialOTTestCases[11]);
        await specialOT.selectEmployee(SpecialOTTestCases[11].employee);
        await specialOT.save( )
    });
    test('TC013 Special OT Request - OT Time', async () => {
        await specialOT.addademy();
        await specialOT.fillForm(SpecialOTTestCases[12]);
        await specialOT.selectEmployee(SpecialOTTestCases[12].employee);
        await specialOT.save( )
    });
    test('TC014 Special OT Request - OT Time', async () => {
        await specialOT.addademy();
        await specialOT.fillForm(SpecialOTTestCases[13]);
        await specialOT.selectEmployee(SpecialOTTestCases[13].employee);
        await specialOT.save( )
    });
    test('TC015 Special OT Request - OT Time', async () => {
        await specialOT.addademy();
        await specialOT.fillForm(SpecialOTTestCases[14]);
        await specialOT.selectEmployee(SpecialOTTestCases[14].employee);
        await specialOT.save( )
    });
    test('TC016 Special OT Request - OT Time', async () => {
        await specialOT.addademy();
        await specialOT.fillForm(SpecialOTTestCases[15]);
        await specialOT.selectEmployee(SpecialOTTestCases[15].employee);
        await specialOT.save( )
    });
    test('TC017 Special OT Request - OT Time', async () => {
        await specialOT.addademy();
        await specialOT.fillForm(SpecialOTTestCases[16]);
        await specialOT.selectEmployee(SpecialOTTestCases[16].employee);
        await specialOT.save( )
    });
    test('TC018 Special OT Request - OT Time', async () => {
        await specialOT.addademy();
        await specialOT.fillForm(SpecialOTTestCases[17]);
        await specialOT.selectEmployee(SpecialOTTestCases[17].employee);
        await specialOT.save( )
    });
    test('TC019 Special OT Request - OT Time', async () => {
        await specialOT.addademy();
        await specialOT.fillForm(SpecialOTTestCases[18]);
        await specialOT.selectEmployee(SpecialOTTestCases[18].employee);
        await specialOT.save( )
    });
    test('TC020 Special OT Request - OT Time', async () => {
        await specialOT.addademy();
        await specialOT.fillForm(SpecialOTTestCases[19]);
        await specialOT.selectEmployee(SpecialOTTestCases[19].employee);
        await specialOT.save( )
    });
    test('TC021 Special OT Request - OT Time', async () => {
        await specialOT.addademy();
        await specialOT.fillForm(SpecialOTTestCases[20]);
        await specialOT.selectEmployee(SpecialOTTestCases[20].employee);
        await specialOT.save( )
    });
    test('TC022 Special OT Request - OT Time', async () => {
        await specialOT.addademy();
        await specialOT.fillForm(SpecialOTTestCases[21]);
        await specialOT.selectEmployee(SpecialOTTestCases[21].employee);
        await specialOT.save( )
    });
    test('TC023 Special OT Request - OT Time', async () => {
        await specialOT.addademy();
        await specialOT.fillForm(SpecialOTTestCases[22]);
        await specialOT.selectEmployee(SpecialOTTestCases[22].employee);
        await specialOT.save( )
    });
    test('TC024 Special OT Request - OT Time', async () => {
        await specialOT.addademy();
        await specialOT.fillForm(SpecialOTTestCases[23]);
        await specialOT.selectEmployee(SpecialOTTestCases[23].employee);
        await specialOT.save( )
    });
    test('TC025 Special OT Request - OT Time', async () => {
        await specialOT.addademy();
        await specialOT.fillForm(SpecialOTTestCases[24]);
        await specialOT.selectEmployee(SpecialOTTestCases[24].employee);
        await specialOT.save( )
    });
    test('TC026 Special OT Request - OT Time', async () => {
        await specialOT.addademy();
        await specialOT.fillForm(SpecialOTTestCases[25]);
        await specialOT.selectEmployee(SpecialOTTestCases[25].employee);
        await specialOT.save( )
    });
    test('TC027 Special OT Request - OT Time', async () => {
        await specialOT.addademy();
        await specialOT.fillForm(SpecialOTTestCases[26]);
        await specialOT.selectEmployee(SpecialOTTestCases[26].employee);
        await specialOT.save( )
    });
    test('TC028 Special OT Request - OT Time', async () => {
        await specialOT.addademy();
        await specialOT.fillForm(SpecialOTTestCases[27]);
        await specialOT.selectEmployee(SpecialOTTestCases[27].employee);
        await specialOT.save( )
    });
    test('TC029 Special OT Request - OT Time', async () => {
        await specialOT.addademy();
        await specialOT.fillForm(SpecialOTTestCases[28]);
        await specialOT.selectEmployee(SpecialOTTestCases[28].employee);
        await specialOT.save( )
    });

});
