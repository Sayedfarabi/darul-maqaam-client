import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Darul Maaqam`
    }, [title])
}

export default useTitle;