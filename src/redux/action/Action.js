let add_student = (record) => {
    return async (dispatch) => {
        try {
            const data = await fetch(`http://localhost:3000/register`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(record)
            })
            const res = await data.json();
            return dispatch({
                type: "Add_Student",
                payload: res
            })


        } catch (err) {
            console.log(err);
            return false

        }
    }

}
let Login_user = (login) => {

    return async (dispatch) => {
        try {
            const data = await fetch(`http://localhost:3000/register?email=${login.email}&password=${login.password}`)
            const res = await data.json();
            if (res.length > 0) {
                return dispatch({
                    type: "login_user",
                    payload: res[0]
                });
            }




        } catch (err) {
            console.log(err);
            return false

        }
    }

}
let Add_Student = (detail) => {
    return async (dispatch) => {
        try {
            const data = await fetch(`http://localhost:3000/student`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(detail)
            })

            const res = await data.json();

            return dispatch({
                type: "Add",
                payload: res
            })


        } catch (err) {
            console.log(err);
            return false

        }
    }
}
let view_user = (record) => {
    return async (dispatch) => {
        try {
            let data = await fetch('http://localhost:3000/student', {
                method: "GET",
            })

            let res = await data.json()

            return dispatch({
                type: "viewuser",
                payload: res,
            })

        } catch (error) {
            console.log(error);
            return false
        }
    }
}
let DeleteUser = (id) => {
    return async (dispatch) => {
        try {
            let data = await fetch(`http://localhost:3000/student/${id}`, {
                method: "DELETE"
            });

            let res = await data.json()
            console.log(res);


            dispatch({
                type: "deleteuser",
                payload: res
            });

        } catch (err) {
            console.log(err);
            return false
        }
    };
};


let Edit_user = (id) => {
    return async (dispatch) => {
        try {
            let data = await fetch(`http://localhost:3000/student/${id}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'

                },
            })

            let res = await data.json();
            return dispatch({
                type: "edituser",
                payload: res
            });


        } catch (error) {
            console.log(error);
            return false
        }
    }
}
const Update_user = (record) => {
    return async (dispatch) => {
        try {
            const res = await fetch(`http://localhost:3000/student/${record.id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(record)
            });

            const data = await res.json();
            console.log("Updated:", data);

            dispatch({
                type: "UPDATE_USER",
                payload: data
            });

        } catch (error) {
            console.error("Update error:", error);
        }
    };
};



export { add_student, Login_user, Add_Student, DeleteUser, Edit_user, Update_user, view_user }