import { ThreeDots } from "react-loader-spinner"

export const Loading = () => {
  return (
       <div className="flex justify-center m-50">
        <ThreeDots
      
  visible={true}
  height="80"
  width="80"
  color="blue"
  radius="9"
  ariaLabel="three-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
       </div>
  )
}