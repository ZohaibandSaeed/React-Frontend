
import { useState } from "react";

function useForm(initValues) {
  const [payload, setPayload] = useState(initValues);

  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(payload);
  };

  const ResetForm = () => {
    setPayload(initValues);
  };

  const HandleChange = (e) => {
    setPayload({
      ...payload,
      [e.target.name]: e.target.value
    });
  };

  return { payload, HandleSubmit, ResetForm, HandleChange };
}

export default useForm;
