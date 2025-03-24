export class DateUtils {
  static getFormattedDate(date: Date): string {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }
}
