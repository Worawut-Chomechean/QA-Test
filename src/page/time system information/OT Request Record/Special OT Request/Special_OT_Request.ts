import { Page } from '@playwright/test';
import { SpecialOTRequestSelector as S } from '../../../../selecter/TimeSystemInformation/OTRequestRecordModify/SpecialOTRequest/SpecialOTRequest.selecter';

export class Special_OT_Request {
  constructor(private page: Page) {}

  private getDay(startDate: string) {
    return startDate.split('/')[0];
  }

  async openPage() {
    await this.page.locator(S.sidebarMenuArea).hover();
    await this.page.locator(S.menuTimeSystem).hover();
    await this.page.locator(S.menuTimeSystem).click();
    await this.page.locator(S.menuOTRequestRecord).hover();

    await this.page.locator(S.dropdownOTType).click();
    await this.page.locator(S.optionSpecialOT).click();

    await this.page.locator(S.buttonAddEmployee).click();
  }

  async selectScope(scope: any) {
    if (scope.type === 'เลือกกลุ่มข้อมูล') {
      await this.page.locator(S.scopeGroupRadio).click();

      await this.page.locator(S.dropdownGroup).click();
      await this.page.locator(S.groupOption(scope.groupName)).click();

      await this.page.locator(S.dropdownFrom).click();
      await this.page.locator(S.dropdownOption(scope.from)).click();

      await this.page.locator(S.dropdownTo).click();
      await this.page.locator(S.dropdownOption(scope.to)).click();
    }
  }

  async pickDate(startDate: string) {
    const day = this.getDay(startDate);
    await this.page.locator(S.openCalendarBtn).click();
    await this.page.locator(S.calendarDay(day)).click();
  }

  async fillForm(tc: any) {
    const form = tc.form;

    await this.pickDate(form.startDate);

    if (form.ot3) await this.page.locator(S.ot3).fill(form.ot3);
    if (form.otAmount) await this.page.locator(S.otAmount).fill(form.otAmount);
    if (form.otFood) await this.page.locator(S.otFood).fill(form.otFood);
    if (form.specialMoney) await this.page.locator(S.specialMoney).fill(form.specialMoney);
    if (form.remark) await this.page.locator(S.remark).fill(form.remark);
  }

  async selectEmployee(employee: string) {
    await this.page.locator(S.employeeRow(employee)).click();
    await this.page.locator(S.arrowRight).click();
  }

  async save() {
    await this.page.locator(S.save).click();
  }

  async runCase(tc: any) {
    await this.openPage();
    await this.selectScope(tc.scope);
    await this.fillForm(tc);
    await this.selectEmployee(tc.employee);
    await this.save();
  }
}
