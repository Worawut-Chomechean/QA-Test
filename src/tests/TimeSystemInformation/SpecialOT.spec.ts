import { test } from '@playwright/test';

import { LoginPage } from '../../page/Login/Login';
import { Special_OT_Request } from '../../page/time system information/OT Request Record/Special OT Request/Special_OT_Request';
import { SpecialOTTestCases } from '../../testData/time system information/OTRequestrecord/Special OT Request/Ot Time Testdata';

for (const tc of SpecialOTTestCases) {
  test(tc.title, async ({ page }) => {
    // ✅ Login ใช้ datalogin ภายใน LoginPage (ไม่ส่ง param)
    const login = new LoginPage(page);
    await login.login();

    // ✅ ใช้ testData เฉพาะ flow Special OT
    const specialOT = new Special_OT_Request(page);
    await specialOT.runCase(tc);
  });
}
