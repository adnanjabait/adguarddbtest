import { builder, Builder } from "@builder.io/react";
import dynamic from "next/dynamic";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

Builder.registerComponent(
  dynamic(() => import("./components/Counter/Counter")),
  {
    name: "Counter",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/DeviceSubscription/DeviceSubscription")),
  {
    name: "DeviceSubscription",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/LoginForm/LoginForm")),
  {
    name: "LoginForm",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/PurchaseModule/LoginButton")),
  {
    name: "LoginButton",
  }
);
