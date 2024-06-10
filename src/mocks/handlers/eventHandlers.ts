import { http, HttpHandler, HttpResponse } from 'msw';

import { NoneType } from '../handlers';

import { baseURL } from '@/apis/axios';
import {
  AllEventCountGetResponse,
  AllEventGetResponse,
  CloseEventPatchRequest,
  EditEventPatchResponse,
  EventCalendarDetailGetResponse,
  EventCalendarGetResponse,
  EventFormType,
  EventGetResponse,
  EventPopupGetResponse,
  EventTypeCountGetRequest,
  EventTypeCountGetResponse,
  MyEventGetResponse,
  NewEventPostRequest,
  NewEventPostResponse,
  SearchEventCountGetResponse,
  SearchEventGetResponse,
  UpcomingEventDdayGetResponse,
} from '@/apis/types/event';
import {
  DisabilityEnum,
  EventStatus,
  EventType,
  RecruitStatus,
  RunningGroup,
} from '@/types/group';
import { EventSort } from '@/types/sort';

//You can add HTTP handler by msw DOCS
//https://mswjs.io/docs/network-behavior/rest

export const eventHandlers: HttpHandler[] = [
  //eventPopupGet
  http.get<{ eventId: string }, NoneType, EventPopupGetResponse>(
    baseURL + '/event/pop/:eventId',
    ({ params }) => {
      return HttpResponse.json({
        content: '테스트용 이벤트입니다!',
        date: '0000-00-00',
        startTime: '00:00',
        endTime: '00:00',
        eventId: Number(params.eventId),
        name: '테스트 훈련',
        place: '테스트 장소',
        recruitStatus: RecruitStatus.Open,
        type: EventType.Training,
        updatedAt: '0000-00-00',
        hasPartner: false,
        isApply: true,
        organizer: '홍길동',
        organizerRecord: RunningGroup.A,
        organizerType: DisabilityEnum.GUIDE,
        partnerName: '고길동',
        partnerRecord: RunningGroup.B,
        partnerType: DisabilityEnum.VI,
        recruitGuide: 22,
        recruitVi: 22,
        guideCnt: 22,
        viCnt: 22,
        status: EventStatus.Open,
      });
    },
  ),

  // upcomingEventDdayGet
  http.get<NoneType, NoneType, UpcomingEventDdayGetResponse>(
    baseURL + '/event/dday',
    () => {
      return HttpResponse.json({
        eventItems: [
          { dDay: 12, name: 'JTBC 마라톤' },
          { dDay: 22, name: '옥스팜 트레일워커' },
        ],
      });
    },
  ),

  //myEventGet
  http.get<NoneType, NoneType, MyEventGetResponse>(
    baseURL + '/event/my',
    ({ request }) => {
      const url = new URL(request.url);

      const sort = url.searchParams.get('sort');
      const year = Number(url.searchParams.get('year'));

      switch (sort) {
        case EventSort.Upcoming:
          return HttpResponse.json({
            items: [
              {
                eventId: 1,
                endDate: `${year}-00-00`,
                dDay: 1,
                eventType: EventType.Competition,
                name: '테스트 이벤트 1',
                recruitStatus: RecruitStatus.Upcoming,
              },
              {
                eventId: 2,
                endDate: `${year}-00-00`,
                dDay: 2,
                eventType: EventType.Training,
                name: '테스트 이벤트 2',
                recruitStatus: RecruitStatus.Open,
              },
              {
                eventId: 3,
                endDate: `${year}-00-00`,
                dDay: 3,
                eventType: EventType.Competition,
                name: '테스트 이벤트 3',
                recruitStatus: RecruitStatus.Open,
              },
              {
                eventId: 4,
                endDate: `${year}-00-00`,
                dDay: 4,
                eventType: EventType.Competition,
                name: '테스트 이벤트 4',
                recruitStatus: RecruitStatus.Upcoming,
              },
              {
                eventId: 5,
                endDate: `${year}-00-00`,
                dDay: 123,
                eventType: EventType.Competition,
                name: '테스트 이벤트 5',
                recruitStatus: RecruitStatus.Upcoming,
              },
            ],
          });
        case EventSort.End:
          return HttpResponse.json({
            items: [
              {
                eventId: 1,
                endDate: `${year}-00-00`,
                dDay: 1,
                eventType: EventType.Competition,
                name: '테스트 이벤트 1',
                recruitStatus: RecruitStatus.Close,
              },
              {
                eventId: 2,
                endDate: `${year}-00-00`,
                dDay: 2,
                eventType: EventType.Training,
                name: '테스트 이벤트 2',
                recruitStatus: RecruitStatus.Close,
              },
              {
                eventId: 3,
                endDate: `${year}-00-00`,
                dDay: 3,
                eventType: EventType.Competition,
                name: '테스트 이벤트 3',
                recruitStatus: RecruitStatus.Close,
              },
              {
                eventId: 4,
                endDate: `${year}-00-00`,
                dDay: 4,
                eventType: EventType.Competition,
                name: '테스트 이벤트 4',
                recruitStatus: RecruitStatus.Close,
              },
              {
                eventId: 5,
                endDate: `${year}-00-00`,
                dDay: 123,
                eventType: EventType.Competition,
                name: '테스트 이벤트 5',
                recruitStatus: RecruitStatus.Close,
              },
            ],
          });
      }
    },
  ),

  //searchEventCountGet
  http.get<NoneType, NoneType, SearchEventCountGetResponse>(
    baseURL + '/event/search/count',
    () => {
      return HttpResponse.json({ count: 40 });
    },
  ),

  //searchEventGet
  http.get<NoneType, NoneType, SearchEventGetResponse>(
    baseURL + '/event/search',
    ({ request }) => {
      const url = new URL(request.url);

      const limit = Number(url.searchParams.get('limit'));

      return HttpResponse.json({
        items: new Array(limit)
          .fill({
            eventId: 1,
            name: '테스트 이벤트 1',
            endDate: '00-00-00',
            eventType: EventType.Competition,
            recruitStatus: RecruitStatus.Open,
          })
          .map((event, idx) => {
            return { ...event, eventId: idx, name: `테스트 이벤트 ${idx}` };
          }),
      });
    },
  ),

  //eventCalendatGet
  http.get<NoneType, NoneType, EventCalendarGetResponse>(
    baseURL + '/event/calendar',
    () => {
      return HttpResponse.json({
        result: [
          { day: 1, competition: false, training: true },
          { day: 4, competition: true, training: true },
          { day: 14, competition: true, training: true },
          { day: 22, competition: false, training: false },
          { day: 25, competition: true, training: false },
        ],
      });
    },
  ),

  //eventCalendarDetailGet
  http.get<NoneType, NoneType, EventCalendarDetailGetResponse>(
    baseURL + '/event/calendar/detail',
    ({ request }) => {
      const url = new URL(request.url);
      const day = Number(url.searchParams.get('day'));
      if (![1, 4, 14, 25].includes(day)) {
        return HttpResponse.json({ items: [] });
      }

      return HttpResponse.json({
        items: [
          {
            eventId: 1,
            name: '테스트 이벤트 1',
            startDate: '00-00-00',
            eventType: EventType.Competition,
            recruitStatus: RecruitStatus.Open,
          },
          {
            eventId: 2,
            name: '테스트 이벤트 2',
            startDate: '00-00-00',
            eventType: EventType.Training,
            recruitStatus: RecruitStatus.Upcoming,
          },
        ],
      });
    },
  ),

  http.get<NoneType, NoneType, AllEventCountGetResponse>(
    baseURL + '/event/all/count',
    () => {
      return HttpResponse.json({ count: 30 });
    },
  ),

  http.get<NoneType, NoneType, AllEventGetResponse>(
    baseURL + '/event/all',
    () => {
      return HttpResponse.json({
        items: [
          {
            eventId: 1,
            name: '테스트 이벤트 1',
            startDate: '00-00-00',
            eventType: EventType.Competition,
            recruitStatus: RecruitStatus.Open,
          },
          {
            eventId: 2,
            name: '테스트 이벤트 2',
            startDate: '00-00-00',
            eventType: EventType.Training,
            recruitStatus: RecruitStatus.Upcoming,
          },
          {
            eventId: 3,
            name: '테스트 이벤트 3',
            startDate: '00-00-00',
            eventType: EventType.Competition,
            recruitStatus: RecruitStatus.Open,
          },
          {
            eventId: 4,
            name: '테스트 이벤트 4',
            startDate: '00-00-00',
            eventType: EventType.Training,
            recruitStatus: RecruitStatus.Upcoming,
          },
          {
            eventId: 5,
            name: '테스트 이벤트 5',
            startDate: '00-00-00',
            eventType: EventType.Competition,
            recruitStatus: RecruitStatus.Open,
          },
          {
            eventId: 6,
            name: '테스트 이벤트 6',
            startDate: '00-00-00',
            eventType: EventType.Training,
            recruitStatus: RecruitStatus.Upcoming,
          },
        ],
      });
    },
  ),

  //eventTypeCountGet
  http.get<EventTypeCountGetRequest, NoneType, EventTypeCountGetResponse>(
    baseURL + '/user/event-type/count/:userId',
    () => {
      return HttpResponse.json({
        totalCnt: 15,
        contestCnt: 10,
        trainingCnt: 5,
      });
    },
  ),

  //newEventPost
  http.post<NoneType, NewEventPostRequest, NewEventPostResponse>(
    baseURL + '/event',
    () => {
      return HttpResponse.json({
        eventId: 123,
        isApprove: false,
      });
    },
  ),

  //closeEventPatch
  http.patch<{ eventId: string }>(baseURL + '/event/close/:eventId', () => {
    return HttpResponse.json();
  }),

  //editEventPatch
  http.patch<{ eventId: string }, EventFormType, EditEventPatchResponse>(
    baseURL + '/event/:eventId',
    async ({ request }) => {
      const body = await request.json();

      return HttpResponse.json(body);
    },
  ),

  //eventGet
  http.get<{ eventId: string }, NoneType, EventGetResponse>(
    baseURL + `/event/:eventId`,
    () => {
      return HttpResponse.json({
        checkOrganizer: true,
        created_at: '0000-00-00',
        date: '2000-12-22',
        details: '테스트용 이벤트 상세 내용',
        startTime: '01:00',
        endTime: '10:00',
        eventId: 1,
        minNumG: 10,
        minNumV: 10,
        name: '테스트 이벤트',
        NumG: 11,
        NumV: 12,
        oragnizerType: DisabilityEnum.GUIDE,
        organizer: '홍길동',
        organizerId: '123',
        organizerPace: RunningGroup.A,
        partner: '고길동',
        partnerPace: RunningGroup.A,
        partnerType: DisabilityEnum.VI,
        place: '잠실 보조 경기장',
        recruitEndDate: '2024-06-12',
        recruitStartDate: '2024-06-12',
        recruitStatus: RecruitStatus.Open,
        status: EventStatus.Open,
        submit: false,
        type: EventType.Competition,
        updated_at: '0000-00-00',
      });
    },
  ),
];
