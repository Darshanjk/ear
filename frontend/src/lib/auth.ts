import { useRouter } from "next/navigation";
import { User } from "./atoms";

export const useAuth = () => {
  const router = useRouter();
  // const login = async ({
  //   setErrors,
  //   setUser,
  //   setLoading,
  //   ...props
  // }: {
  //   setErrors: any;
  //   setUser: any;
  //   setLoading: any;
  //   email: any;
  //   password: any;
  // }) => {
  //   setErrors([]);
  //   fetch(process.env.NEXT_PUBLIC_API_URL + "/api/v1/token", {
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     method: "POST",
  //     body: JSON.stringify(props),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if ("detail" in data) {
  //         setErrors(data);
  //         console.log(data);
  //         setLoading(false);
  //       }

  //       if ("access_token" in data) {
  //         fetch("/api/login", {
  //           headers: {
  //             Accept: "application/json",
  //             "Content-Type": "application/json",
  //           },
  //           method: "POST",
  //           body: JSON.stringify({ accessToken: data["access_token"] }),
  //         })
  //           .then((response) => response.json())
  //           .then((res) => {
  //             setUser((state: User) => ({
  //               ...state,
  //               accessToken: data["access_token"],
  //               email: res?.user?.email,
  //               isAdmin: res?.user?.is_admin,
  //             }));
  //             router.push("/dashboard");
  //             setLoading(false);
  //           })
  //           .catch((res) => console.log(res));
  //       }
  //     })
  //     .catch((res) => console.log(res));
  // };

  const login = async ({
    setErrors,
    setUser,
    setLoading,
    ...props
  }: {
    setErrors: any;
    setUser: any;
    setLoading: any;
    email: any;
    password: any;
  }) => {
    setErrors([]);
    const tokenRequest = fetch(
      process.env.NEXT_PUBLIC_API_URL + "/api/v1/token",
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(props),
      }
    );

    const loginRequest = tokenRequest
      .then((response) => response.json())
      .then((data) => {
        if ("detail" in data) {
          setErrors(data);
          console.log(data);
          setLoading(false);
          throw new Error("Failed to login");
        }

        if ("access_token" in data) {
          return fetch("/api/login", {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({ accessToken: data["access_token"] }),
          })
            .then((response) => response.json())
            .then((res) => {
              setUser((state: User) => ({
                ...state,
                accessToken: data["access_token"],
                email: res?.user?.email,
                isAdmin: res?.user?.is_admin,
              }));
              return "/dashboard";
            });
        }
      });

    try {
      setLoading(true);
      const [dashboardUrl] = await Promise.all([loginRequest]);
      if (dashboardUrl) {
        router.push(dashboardUrl);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  };

  const logout = async ({ setUser }: { setUser: any }) => {
    fetch("/api/logout", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => response.json())
      .then((res) => {
        setUser((state: User) => ({
          ...state,
          accessToken: "",
          email: "",
          isAdmin: false,
        }));
        router.push("/login");
      })
      .catch((res) => console.log(res));
  };

  return {
    login,
    logout,
  };
};
