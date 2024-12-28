const useUpdateUser = (id) => {
  const updateUser = async (userInfor) => {
      try {
          const formData = new FormData();
          formData.append('avatar', userInfor.avatar);
          formData.append('user', JSON.stringify(userInfor));
          const response = await fetch(`/Api/api/user/update/${id}`, {
              method: 'POST',
              credentials: 'include',
              body: formData,
              headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               },
          });
          const data = await response.json();
          if (!response.ok) {
              console.log(data?.message);
          }
          console.log(data?.message);
      } catch (error) {
          console.log(error);
      }
  };
  return { updateUser };
};

export default useUpdateUser;
