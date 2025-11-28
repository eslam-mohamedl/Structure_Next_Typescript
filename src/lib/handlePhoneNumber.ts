export const handlePhoneNumber = (phoneNumber: string) => {
  if (!(phoneNumber.length === 10 || phoneNumber.length === 11)) {
    console.log("Error");
    return;
  }

  if (phoneNumber.length === 11) {
    if (!/^0(10|11|12|15)/.test(phoneNumber)) {
      console.log("Error");
      return;
    }
    return "+20" + phoneNumber.slice(1);
  }

  if (phoneNumber.length === 10) {
    if (!/^(10|11|12|15)/.test(phoneNumber)) {
      console.log("Error");
      return;
    }
    return "+20" + phoneNumber;
  }
};
