import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";

export default function HomePage() {
    const router = useRouter();
    useEffect(() => {
        router.push("/login");
    }, []);
}
