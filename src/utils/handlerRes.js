const handlerRes = (res) => {
  if (res.ok) {
    return res.json();
  } else return res;
};

export default handlerRes;
