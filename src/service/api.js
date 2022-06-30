import Axios from "axios";
const defaultAxios = Axios.create({
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
    "X-CSRF-Token": "EVptPdv7EIs4KdgBDm+D9A0ssQB2L+lsZ4ECv3J4r7w=",
    "X-Requested-With": "XMLHttpRequest",
    "content-type": "application/json",
    Cookie:
      "_BEAMER_USER_ID_FmNWbLVp23294=62f49a5e-e6be-494f-930b-179f40d151a9; _BEAMER_FIRST_VISIT_FmNWbLVp23294=2022-06-22T10:07:55.020Z; zarget_user_id=28b0d2dd-6c34-4161-a234-6c1963f8ba90; 28b0d2dd-6c34-4161-a234-6c1963f8ba90=1; _fw_crm_v=6db31c8d-f610-45c4-abbc-9d65982825c6; _BEAMER_DATE_FmNWbLVp23294=2022-06-22T10:59:25.864Z; 28b0d2dd-6c34-4161-a234-6c1963f8ba90=1; _hp2_id.4124298811=%7B%22userId%22%3A%228718439767580935%22%2C%22pageviewId%22%3A%222341693236921119%22%2C%22sessionId%22%3A%227293558387544189%22%2C%22identity%22%3A%22108658%22%2C%22trackerVersion%22%3A%224.0%22%2C%22identityField%22%3A%22Id%22%2C%22isIdentified%22%3A1%7D; _hp2_id.3685912075=%7B%22userId%22%3A%221062442078220250%22%2C%22pageviewId%22%3A%226319476533096065%22%2C%22sessionId%22%3A%227147843629088429%22%2C%22identity%22%3A%22627251769858159%22%2C%22trackerVersion%22%3A%224.0%22%2C%22identityField%22%3Anull%2C%22isIdentified%22%3A1%7D; _BEAMER_USER_ID_HhwIYNSM14621=fc09c82a-cb00-4b22-bbc7-718f3283cd6e; _BEAMER_FIRST_VISIT_HhwIYNSM14621=2022-06-27T08:44:42.085Z; _d=MDBmOTVlZjMtMWUyOC00NTVkLTliN2ItM2I2NmVhZGFiOGJl; _hp2_id.870388005=%7B%22userId%22%3A%226613280778045038%22%2C%22pageviewId%22%3A%22951622549051541%22%2C%22sessionId%22%3A%228096889315781605%22%2C%22identity%22%3A%22459662297025678332%22%2C%22trackerVersion%22%3A%224.0%22%2C%22identityField%22%3Anull%2C%22isIdentified%22%3A1%7D; _freshsales_session=BAh7B0kiD3Nlc3Npb25faWQGOgZFVEkiJTM4YTZkY2Y5MWEyN2I1YTA0MWRhMWIxN2Q2NWY2YzIzBjsAVEkiEF9jc3JmX3Rva2VuBjsARkkiMUVWcHRQZHY3RUlzNEtkZ0JEbStEOUEwc3NRQjJMK2xzWjRFQ3YzSjRyN3c9BjsARg%3D%3D--79be8abbfda85ce2baf88c478a302eb1d06e6706; _x_m=x_a; _BEAMER_FILTER_BY_URL_FmNWbLVp23294=true; _hp2_ses_props.1325449719=%7B%22ts%22%3A1656576133133%2C%22d%22%3A%22dhiwise-459662296123098611.myfreshworks.com%22%2C%22h%22%3A%22%2Fcrm%2Fsales%2Fmy_dashboards%22%2C%22q%22%3A%22%3Ftab%3Dactivities%22%7D; capability_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzY29wZSI6InNjb3BlOmNsaWVudDppbmNvbWluZz9jbGllbnROYW1lPTEwODY1OCBzY29wZTpjbGllbnQ6b3V0Z29pbmc_YXBwU2lkPUFQYWE0MTVmY2RkZTU4MzQ1ZjMzOGQwMzczZGY5YWE1ZTcmY2xpZW50TmFtZT0xMDg2NTgiLCJpc3MiOiJBQzliZGU4MmE3MjA0NDg1ZDUyNjE2YzQzOGM3MGRjOTA4IiwiZXhwIjoxNjU2NjE5Mzg4fQ.nZ-GfWYENY-4k0vuU5t0fsTm4VQBaZv0-Z4yLJ_s83Y; _session_id=WFNUYnF3OUZmQVkvVlJtZDh4Z2ZVbXdlcVExNFVKUURpMml0R3pBWFNGUE9SbkZaMDJWZXBjTDYxUytCVkRXNGZWUHJTUllVSmVZVmUvTDBxQkZuYitWNUQ5d2hOaEM3VVl5TllES1B2TkdUWVhVSWJoUVpPNWI5bkt3dlpEVlpVOUt4SXh1dHJUTGRsaWZPYUtPVnF3PT0tLVVZdnNoSHdJajNrWWlUNHZTT1FROXc9PQ%3D%3D--8f3fd0ff1c21d6ca69dbc56f512366c99059bd04; XSRF-TOKEN=3e374ce1-c1d8-4227-894a-9236d41dc15e.UwfM+AWV+FiyAOOaAN0g/C3NgtJdNC40gIho3rURu9s=; _hp2_id.1325449719=%7B%22userId%22%3A%224439285445376629%22%2C%22pageviewId%22%3A%222916229818051230%22%2C%22sessionId%22%3A%224388480210974703%22%2C%22identity%22%3A%22459662297025678332%22%2C%22trackerVersion%22%3A%224.0%22%2C%22identityField%22%3Anull%2C%22isIdentified%22%3A1%2C%22oldIdentity%22%3Anull%7D",
  },
});
defaultAxios.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export const postFilterize = ({
  data = {},
  headers = {},
  params = {},
  path = {},
} = {}) => {
  return defaultAxios({
    url: `https://dhiwise-459662296123098611.myfreshworks.com/crm/sales/contacts/filterize`,
    method: "post",
    params,
    headers,
    data: {
      filter_rule: [
        {
          attribute: "owner_id",
          operator: "is_in",
          value: ["-1001", "-1002", "70000078627", "70000079614"],
          childRule: [],
        },
      ],
      ...data,
    },
  });
};
