export const carList = async (formData) => {
  const res = await fetch("http://localhost:3100/carListed", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const data = await res.json();

  return data;
};

export const carCollections = async () => {
  const res = await fetch("http://localhost:3100/carListed", {
    method: "GET",
  });
  const data = await res.json();

  return data;
};
export const carDetailsById = async (id) => {
  const res = await fetch(`http://localhost:3100/carListed/${id}`, {
    method: "GET",
  });
  const data = await res.json();

  return data;
};
export const bookCar = async (bookInfo, car) => {
  const res = await fetch(`http://localhost:3100/bookings`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      bookInfo: bookInfo,
      carInfo: car,
    }),
  });
  const data = await res.json();

  return data;
};
export const myBookCars = async (token) => {
  const res = await fetch(`http://localhost:3100/bookings`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();

  return data;
};

export const deleteAddedCar = async (id) => {
  const res = await fetch(`http://localhost:3100/carlisted/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  });

  const data = await res.json();
  return data;
};
export const updateAddedCar = async (id, updatedData) => {
  const res = await fetch(`http://localhost:3100/carlisted/${id}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(updatedData),
  });

  const data = await res.json();
  return data;
};
export const deleteBookingCar = async (id, token) => {
  const res = await fetch(`http://localhost:3100/bookings/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();
  return data;
};
