import React from "react";
import "./Hook-Form.css";
import { useForm } from 'react-hook-form';
export default function HookForm() {
    const {
      register,
      handleSubmit,
      formState: { errors }
    } = useForm();
  
    const onSubmit = (data) => {
      console.log(data);
    };
  
    return (
        <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
       
        <div className="form-control">
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            {...register("phone", {
              required: "phone is required.",
              pattern: {
                value: /05[0-9]{8}/,
                message: "Phone is not valid."
              },
              maxLength: {
                value: 10,
                message: "phone should be only 10 digits."
              }
            })}
          />
          {errors.phone && <p className="errorMsg">{errors.phone.message}</p>}
        </div>
        <div className="form-control">
          <label>Name</label>
          <input
            type="text"
            name="name"
            {...register("name", {
              required: "name is required.",
              pattern: {
                value: /[A-Za-z\u0590-\u05FF]/,
                message: "Name is not valid."
              },
              maxLength: {
                value: 20,
                message: "name should be till 20 letters."
              }
            })}
          />
          {errors.name && <p className="errorMsg">{errors.name.message}</p>}
        </div>
        <div className="form-control">
          <label>City</label>
          <select  {...register("city", {
              required: "city is required."
            })}>
              <option></option>
              <option>בני ברק</option>
              <option>ירושלים</option>
              <option>בית שמש</option>
              <option>אלעד</option>
          </select>
          {errors.city && <p className="errorMsg">{errors.city.message}</p>}
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            name="password"
            {...register("password", {
              required: "Password is required.",
              minLength: {
                value: 6,
                message: "Password should be at-least 6 characters."
              }
            })}
          />
          {errors.password && (
            <p className="errorMsg">{errors.password.message}</p>
          )}
        </div>
        <div className="form-control">
          <label>Email</label>
          <input
            type="text"
            name="email"
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Email is not valid."
              }
            })}
          />
          {errors.email && <p className="errorMsg">{errors.email.message}</p>}
        </div>
        <div className="form-control">
          <label></label>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
  }