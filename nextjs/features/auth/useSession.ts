import {useMemo} from "react";
import {useAppDispatch, useAppSelector} from "../../app/store";

export default function useSession() {
  const dispatch = useAppDispatch();
  
  const {email, user_id, loading, loaded} = useAppSelector(store => store.auth);
  const isAuthorized = useMemo(() => user_id > 0, [user_id])
  
  return {isAuthorized, email, user_id, loading: !loaded || loading}
}
