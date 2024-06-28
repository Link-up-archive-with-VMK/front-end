import { axiosInstanceWithToken } from '../axios';
import {
  AdminApproveUserPostRequest,
  AdminApproveUserPostResponse,
  AdminCurrentEventGetRequest,
  AdminCurrentEventGetResponse,
  AdminEventHistoryCountGetRequest,
  AdminEventHistoryCountGetResponse,
  AdminEventHistoryGetRequest,
  AdminEventHistoryGetResponse,
  AdminEventListCountGetResponse,
  AdminEventListGetRequest,
  AdminEventListGetResponse,
  AdminEventTotalCountGetRequest,
  AdminEventTotalCountGetResponse,
  AdminEventTypeCountGetRequest,
  AdminEventTypeCountGetResponse,
  AdminGuideApplyGetRequest,
  AdminGuideApplyGetResponse,
  AdminNewUserGetRequest,
  AdminNewUserGetResponse,
  AdminPartnerHistoryCountGetRequest,
  AdminPartnerHistoryCountGetResponse,
  AdminPartnerHistoryGetRequest,
  AdminPartnerHistoryGetResponse,
  AdminPartnerTypeCountGetRequest,
  AdminPartnerTypeCountGetResponse,
  AdminSearchEventCountGetRequest,
  AdminSearchEventCountGetResponse,
  AdminSearchEventGetRequest,
  AdminSearchEventGetResponse,
  AdminSearchEventHistoryCountGetRequest,
  AdminSearchEventHistoryCountGetResponse,
  AdminSearchEventHistoryGetRequest,
  AdminSearchEventHistoryGetResponse,
  AdminSearchPartnerHistoryCountGetRequest,
  AdminSearchPartnerHistoryCountGetResponse,
  AdminSearchPartnerHistoryGetRequest,
  AdminSearchPartnerHistoryGetResponse,
  AdminSearchWithdrawalListCountGetRequest,
  AdminSearchWithdrawalListCountGetResponse,
  AdminSearchWithdrawalListGetRequest,
  AdminSearchWithdrawalListGetResponse,
  AdminUserListCountGetResponse,
  AdminUserListGetRequest,
  AdminUserListGetResponse,
  AdminUserSearchCountGetRequest,
  AdminUserSearchCountGetResponse,
  AdminUserSearchGetRequest,
  AdminUserSearchGetResponse,
  AdminViApplyGetRequest,
  AdminViApplyGetResponse,
  AdminWithdrawalListCountGetResponse,
  AdminWithdrawalListGetRequest,
  AdminWithdrawalListGetResponse,
} from '../types/admin';

import { EventType } from '@/types/group';

class AdminApi {
  adminUserListGet = async ({
    limit,
    start,
    approval,
    gender,
    team,
    time,
    type,
  }: AdminUserListGetRequest) => {
    return await axiosInstanceWithToken
      .get<AdminUserListGetResponse>(
        `/admin/user-list?limit=${limit}&start=${start}${
          typeof approval === 'number' ? `&approval=${approval}` : ''
        }${typeof gender === 'number' ? `&gender=${gender}` : ''}${
          typeof team === 'number' ? `&name_team=${team}` : ''
        }${typeof time === 'number' ? `&time=${time}` : ''}${
          typeof type === 'number' ? `&approval=${type}` : ''
        }`,
      )
      .then((res) => res.data.items);
  };

  adminUserListCountGet = async () => {
    return await axiosInstanceWithToken
      .get<AdminUserListCountGetResponse>(`/admin/user-list/count`)
      .then((res) => res.data.count);
  };

  adminWithdrawalListCountGet = async () => {
    return await axiosInstanceWithToken
      .get<AdminWithdrawalListCountGetResponse>('/admin/withdrawal-list/count')
      .then((res) => res.data.count);
  };

  adminWithdrawlListGet = async ({
    limit = 10,
    start = 0,
    approval,
    gender,
    team,
    time,
    type,
  }: AdminWithdrawalListGetRequest) => {
    return await axiosInstanceWithToken
      .get<AdminWithdrawalListGetResponse>(
        `/admin/withdrawal-list?limit=${limit}&start=${start}${
          typeof approval === 'number' ? `&approval=${approval}` : ''
        }${typeof gender === 'number' ? `&gender=${gender}` : ''}${
          typeof team === 'number' ? `&name_team=${team}` : ''
        }${typeof time === 'number' ? `&time=${time}` : ''}${
          typeof type === 'number' ? `&approval=${type}` : ''
        }`,
      )
      .then((res) => res.data.items);
  };

  adminSearchWithdrawalListCountGet = async ({
    text,
  }: AdminSearchWithdrawalListCountGetRequest) => {
    return await axiosInstanceWithToken
      .get<AdminSearchWithdrawalListCountGetResponse>(
        `/admin/search/withdrawal-list/count?text=${text}`,
      )
      .then((res) => res.data.count);
  };

  adminSearchWithdrawalListGet = async ({
    limit,
    start,
    text,
    approval,
    gender,
    team,
    time,
    type,
  }: AdminSearchWithdrawalListGetRequest) => {
    return await axiosInstanceWithToken
      .get<AdminSearchWithdrawalListGetResponse>(
        `/admin/search/withdrawal-list?text=${text}&limit=${limit}&start=${start}${
          typeof approval === 'number' ? `&approval=${approval}` : ''
        }${typeof gender === 'number' ? `&gender=${gender}` : ''}${
          typeof team === 'number' ? `&name_team=${team}` : ''
        }${typeof time === 'number' ? `&time=${time}` : ''}${
          typeof type === 'number' ? `&approval=${type}` : ''
        }`,
      )
      .then((res) => res.data.items);
  };

  adminUserSearchGet = async ({
    limit,
    start,
    text,
    approval,
    gender,
    team,
    time,
    type,
  }: AdminUserSearchGetRequest) => {
    return await axiosInstanceWithToken
      .get<AdminUserSearchGetResponse>(
        `/admin/search/user?text=${text}&limit=${limit}&start=${start}${
          typeof approval === 'number' ? `&approval=${approval}` : ''
        }${typeof gender === 'number' ? `&gender=${gender}` : ''}${
          typeof team === 'number' ? `&name_team=${team}` : ''
        }${typeof time === 'number' ? `&time=${time}` : ''}${
          typeof type === 'number' ? `&approval=${type}` : ''
        }`,
      )
      .then((res) => res.data.items);
  };

  adminUserSearchCountGet = async ({
    text,
  }: AdminUserSearchCountGetRequest) => {
    return await axiosInstanceWithToken
      .get<AdminUserSearchCountGetResponse>(
        `/admin/search/user/count?text=${text}`,
      )
      .then((res) => res.data.count);
  };

  adminViApplyGet = async ({ userId }: AdminViApplyGetRequest) => {
    return await axiosInstanceWithToken
      .get<AdminViApplyGetResponse>(`/admin/apply/vi/${userId}`)
      .then((res) => res.data);
  };

  adminGuideApplyGet = async ({ userId }: AdminGuideApplyGetRequest) => {
    return await axiosInstanceWithToken
      .get<AdminGuideApplyGetResponse>(`/admin/apply/guide/${userId}`)
      .then((res) => res.data);
  };

  adminApproveUserPost = async ({
    isApprove,
    userId,
    recordDegree,
  }: AdminApproveUserPostRequest) => {
    return await axiosInstanceWithToken
      .post<AdminApproveUserPostResponse>(`/admin/approval-user/${userId}`, {
        isApprove,
        recordDegree,
      })
      .then((res) => res.data);
  };

  adminEventListGet = async ({
    limit,
    start,
    approval,
    name,
    organizer,
    time,
  }: AdminEventListGetRequest) => {
    return await axiosInstanceWithToken
      .get<AdminEventListGetResponse>(
        `/admin/event-list?limit=${limit}&start=${start}${
          typeof approval === 'number' ? `approval=${approval}` : ''
        }${typeof name === 'number' ? `name=${name}` : ''}${
          typeof organizer === 'number' ? `organizer=${organizer}` : ''
        }${typeof time === 'number' ? `time=${time}` : ''}`,
      )
      .then((res) => res.data.items);
  };

  adminEventListCountGet = async () => {
    return await axiosInstanceWithToken
      .get<AdminEventListCountGetResponse>(`/admin/event-list/count`)
      .then((res) => res.data.count);
  };

  adminSearchEventGet = async ({
    search,
    approval,
    name,
    organizer,
    time,
    limit,
    start,
  }: AdminSearchEventGetRequest) => {
    return await axiosInstanceWithToken
      .get<AdminSearchEventGetResponse>(
        `/admin/search/event?text=${search}&limit=${limit}&start=${start}${
          typeof approval === 'number' ? `approval=${approval}` : ''
        }${typeof name === 'number' ? `name=${name}` : ''}${
          typeof organizer === 'number' ? `organizer=${organizer}` : ''
        }${typeof time === 'number' ? `time=${time}` : ''}`,
      )
      .then((res) => res.data.items);
  };

  adminSearchEventCountGet = async ({
    search,
  }: AdminSearchEventCountGetRequest) => {
    return await axiosInstanceWithToken
      .get<AdminSearchEventCountGetResponse>(
        `/admin/search/event/count?text=${search}`,
      )
      .then((res) => res.data.count);
  };

  adminEventHistoryGet = async ({
    limit,
    start,
    userId,
  }: AdminEventHistoryGetRequest) => {
    return await axiosInstanceWithToken
      .get<AdminEventHistoryGetResponse>(
        `/admin/event-list/${userId}?start=${start}&limit=${limit}`,
      )
      .then((res) => res.data.items);
  };

  adminEventHistoryCountGet = async ({
    userId,
  }: AdminEventHistoryCountGetRequest) => {
    return await axiosInstanceWithToken
      .get<AdminEventHistoryCountGetResponse>(
        `/admin/event-list/count/${userId}`,
      )
      .then((res) => res.data.count);
  };

  adminEventTotalCountGet = async ({
    userId,
  }: AdminEventTotalCountGetRequest) => {
    return await axiosInstanceWithToken
      .get<AdminEventTotalCountGetResponse>(`/admin/${userId}/event-type/count`)
      .then((res) => res.data);
  };

  adminNewUserGet = async ({
    limit = 6,
    start = 0,
  }: AdminNewUserGetRequest) => {
    return await axiosInstanceWithToken
      .get<AdminNewUserGetResponse>(
        `/admin/new-user?limit=${limit}&start=${start}`,
      )
      .then((res) => res.data.items);
  };

  adminCurrentEventGet = async ({
    limit = 4,
    start = 0,
  }: AdminCurrentEventGetRequest) => {
    return await axiosInstanceWithToken
      .get<AdminCurrentEventGetResponse>(
        `/admin/current-event?limit=${limit}&start=${start}`,
      )
      .then((res) => res.data.items);
  };

  adminEventTypeCountGet = async ({
    userId,
  }: AdminEventTypeCountGetRequest) => {
    return await axiosInstanceWithToken
      .get<AdminEventTypeCountGetResponse>(`/admin/event-type/count/${userId}`)
      .then((res) => res.data);
  };

  adminSearchEventHistoryCountGet = async ({
    text,
    userId,
  }: AdminSearchEventHistoryCountGetRequest) => {
    return await axiosInstanceWithToken
      .get<AdminSearchEventHistoryCountGetResponse>(
        `/admin/search/event-list/count/${userId}?text=${text}`,
      )
      .then((res) => res.data.count);
  };

  adminSearchEventHistoryGet = async ({
    text,
    userId,
    limit = 5,
    start = 0,
  }: AdminSearchEventHistoryGetRequest) => {
    return await axiosInstanceWithToken
      .get<AdminSearchEventHistoryGetResponse>(
        `/admin/search/event-list/${userId}?text=${text}&limit=${limit}&start=${start}`,
      )
      .then((res) => res.data.items);
  };

  adminPartnerTypeCountGet = async ({
    userId,
  }: AdminPartnerTypeCountGetRequest) => {
    return await axiosInstanceWithToken
      .get<AdminPartnerTypeCountGetResponse>(
        `/admin/partner-type/count/${userId}`,
      )
      .then((res) => res.data);
  };

  adminPartnerHistoryCountGet = async ({
    userId,
    kind = EventType.TOTAL,
  }: AdminPartnerHistoryCountGetRequest) => {
    return await axiosInstanceWithToken
      .get<AdminPartnerHistoryCountGetResponse>(
        `/admin/partner-list/count/${userId}?kind=${kind}`,
      )
      .then((res) => res.data.count);
  };

  adminPartnerHistoryGet = async ({
    userId,
    kind = EventType.TOTAL,
    limit = 6,
    start = 0,
  }: AdminPartnerHistoryGetRequest) => {
    return await axiosInstanceWithToken
      .get<AdminPartnerHistoryGetResponse>(
        `/admin/partner-list/${userId}?kind=${kind}&start=${start}&limit=${limit}`,
      )
      .then((res) => res.data.items);
  };

  adminSearchPartnerHistoryCountGet = async ({
    userId,
    text,
  }: AdminSearchPartnerHistoryCountGetRequest) => {
    return await axiosInstanceWithToken
      .get<AdminSearchPartnerHistoryCountGetResponse>(
        `/admin/search/partner-list/count/${userId}?text=${text}`,
      )
      .then((res) => res.data.count);
  };

  adminSearchPartnerHistoryGet = async ({
    text,
    userId,
    limit = 6,
    start = 0,
  }: AdminSearchPartnerHistoryGetRequest) => {
    return await axiosInstanceWithToken
      .get<AdminSearchPartnerHistoryGetResponse>(
        `admin/search/partner-list/${userId}?text=${text}&limit=${limit}&start=${start}`,
      )
      .then((res) => res.data.items);
  };
}

const adminApi = new AdminApi();

export default adminApi;
