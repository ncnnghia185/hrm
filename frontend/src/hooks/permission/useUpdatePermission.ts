import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
export const useUpdatePermission = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [currentPermissionData, setCurrentPermissionData] = useState<boolean>(true)
}