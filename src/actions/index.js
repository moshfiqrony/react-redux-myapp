export const selectUser = (user) => {
    return(
        {
            type: "user_clicked",
            payload: user
        }
    )
}