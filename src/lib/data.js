export const carList = async (formData) => {
  const res = await fetch("http://localhost:3100/carListed", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const data = res.json();
  return data;
};

export const carCollections = async () => {
  const res = await fetch("http://localhost:3100/carListed", {
    method: "GET",
  });
  const data = await res.json();
  console.log(data);
  return data;
};
export const carDetailsById = async (id) => {
  const res = await fetch(`http://localhost:3100/carListed/${id}`, {
    method: "GET",
  });
  const data = await res.json();
  console.log(data);
  return data;
};
