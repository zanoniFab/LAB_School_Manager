
export const useUserInfo = () => {

    const [isSubmitting, setSubmitting] = useState(false);

    const onSubmit = async (data) => {
        setSubmitting(true);
        const response = await apiService.post('/register',data)
        if (response.data) {
        navigate('/')
        return;
        }
        setSubmitting(false);
        alert(response.error);
    }
}