import { useForm } from "react-hook-form";
import Header from "./Header";

let renderCount = 0;
export default function SampleCode1() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "SeungJun",
      lastName: "LEE", // 입력 초기값
    },
  });
  renderCount++;
  return (
    <>
      <Header renderCount={renderCount} />
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <input
          {...register("firstName", { required: "This is required" })}
          //errors.firestName.message에 해당에러 메시지를 넣어줄 수 있다.
          placeholder="First Name"
        />
        <input
          {...register("lastName", {
            required: "This is required",
            minLength: { value: 4, message: "Min length is 4" },
            // 최소 길이의 대한 값과 메시지를 넣어줄 수 있다. "minLength : 4"이렇게만 적어도 된다.
          })}
          placeholder="Last Name"
        />
        {errors.lastName ? <p>{errors.lastName.message}</p> : null}
        <input type="submit" />
      </form>
    </>
  );
}
