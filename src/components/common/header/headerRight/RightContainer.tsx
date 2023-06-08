import SignInAndUp from "./SignInAndUp";
import AfterLogin from "./AfterLogin";

const RightContainer = () => {
  return (
    <>
      <section className="flex justify-end items-center w-[30rem] h-[4rem]">
        <div className="flex items-center">
          <SignInAndUp />
          <AfterLogin />
        </div>
      </section>
    </>
  );
};

export default RightContainer;
