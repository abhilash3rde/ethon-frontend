import { reactLocalStorage } from "reactjs-localstorage"

export const token = () => {
    try {
        const token = reactLocalStorage.get("token", false)
        return ({
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

    } catch (error) {

    }

}