export const getToken = async () => {
  const response = await fetch(
    "https://opentdb.com/api_token.php?command=request"
  );
  const responseJSON = await response.json();
  return responseJSON;
};
