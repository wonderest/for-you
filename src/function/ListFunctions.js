import axios from "axios";

const URL =
  "https://us-central1-wonderest-app.cloudfunctions.net/app/api/starcell";

export const getList = () => {
  return axios
    .get(URL + "/voucher", {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      return res.data;
    });
};

export const addItem = (form) => {
  console.log(form);
  return axios
    .post(
      URL + "/voucher",
      {
        provider: form.provider,
        quota: form.quota,
        price: form.price,
        stock: form.stock,
        info: form.info,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    )
    .then((res) => {
      console.log(res);
    });
};

export const updateItem = (form) => {
  console.log(`/voucher/${form.id}`);
  return axios
    .put(
      URL + `/voucher/${form.id}`,
      {
        provider: form.provider,
        quota: form.quota,
        price: form.price,
        stock: form.stock,
        info: form.info,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    )
    .then((res) => {
      console.log(res);
    });
};

export const deleteItem = (id) => {
  return axios
    .delete(URL + `/voucher/${id}`, {
      headers: { "Content-Type": "application/json" },
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
