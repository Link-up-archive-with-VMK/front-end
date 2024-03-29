export enum RunningGroup {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  E = 'E',
  P = 'P',
}

export enum RoleEnum {
  New = 'NEW',
  Reject = 'REJECT',
  Wait = 'WAIT',
  User = 'USER',
  Coach = 'COACH',
  Admin = 'ADMIN',
}

export enum GenderEnum {
  M = 'MALE',
  W = 'FEMALE',
}

export enum DisabilityEnum {
  VI = 'VI',
  GUIDE = 'GUIDE',
}

export enum EventType {
  Training = 'TRAINING',
  Competition = 'COMPETITION',
}

/**
 * @enum RecruitStatus 모집 상태
 * @var Upcoming 모집 예정
 * @var Open 모집중
 * @var Close 모집 종료
 */

export enum RecruitStatus {
  Upcoming = 'UPCOMING',
  Open = 'OPEN',
  Close = 'CLOSE',
  End = 'END',
}
