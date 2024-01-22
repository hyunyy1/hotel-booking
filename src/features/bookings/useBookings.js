import { useSearchParams } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import { getBookings } from "../../services/apiBookings";
import { PAGE_SIZE } from "../../utils/constants";

export function useBookings() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // FILTER - api side
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };
  // : { field: "totalPrice", value: 5000, method: "gte" };

  // SORT - api side
  const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  // PAGINATION - api side
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  // QUERY
  const {
    isLoading,
    data: { data: bookings, count } = {},
    error,
  } = useQuery(["bookings", filter, sortBy, page], () =>
    getBookings({ filter, sortBy, page })
  );

  // PRE-FETCHING
  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (page < pageCount)
    queryClient.prefetchQuery(["bookings", filter, sortBy, page + 1], () =>
      getBookings({ filter, sortBy, page: page + 1 })
    );

  if (page > 1)
    queryClient.prefetchQuery(["bookings", filter, sortBy, page - 1], () =>
      getBookings({ filter, sortBy, page: page - 1 })
    );

  return { isLoading, bookings, count, error };
}
