import React from "react";

function Sites() {
  return (
    <>
      <div className="w-full px-6 py-6 mx-auto">
        <div className="flex flex-wrap -mx-3">
          <div className="w-full max-w-full px-3 mb-6 sm:w-1/5 sm:flex-none xl:mb-0 xl:w-1/5">
            <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
              <div className="flex-auto p-4">
                <div className="flex flex-row -mx-3">
                  <div className="flex-none w-2/3 max-w-full px-3">
                    <div>
                      <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60">
                        TOTAL
                      </p>
                      <h5 className="mb-2 font-bold dark:text-white">350</h5>
                    </div>
                  </div>
                  <div className="px-3 text-right basis-1/3">
                    <div className="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-blue-500 to-violet-500">
                      <i className="ni leading-none ni-money-coins text-lg relative top-3.5 text-white"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-full px-3 sm:w-1/5 sm:flex-none xl:w-1/5">
            <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
              <div className="flex-auto p-4">
                <div className="flex flex-row -mx-3">
                  <div className="flex-none w-2/3 max-w-full px-3">
                    <div>
                      <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60">
                        OFFLINE
                      </p>
                      <h5 className="mb-2 font-bold dark:text-white">56</h5>
                    </div>
                  </div>
                  <div className="px-3 text-right basis-1/3">
                    <div className="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-orange-500 to-yellow-500">
                      <i className="ni leading-none ni-cart text-lg relative top-3.5 text-white"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-full px-3 mb-6 sm:w-1/5 sm:flex-none xl:mb-0 xl:w-1/5">
            <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
              <div className="flex-auto p-4">
                <div className="flex flex-row -mx-3">
                  <div className="flex-none w-2/3 max-w-full px-3">
                    <div>
                      <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60">
                        Healthy
                      </p>
                      <h5 className="mb-2 font-bold dark:text-white">185</h5>
                    </div>
                  </div>
                  <div className="px-3 text-right basis-1/3">
                    <div className="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-blue-500 to-violet-500">
                      <i className="ni leading-none ni-money-coins text-lg relative top-3.5 text-white"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DATATABLE */}
          <div className="w-full max-w-full px-3 mb-6 sm:w-1/5 sm:flex-none xl:mb-0 xl:w-1/5">
            <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
              <div className="flex-auto p-4">
                <div className="flex flex-row -mx-3">
                  <div className="flex-none w-2/3 max-w-full px-3">
                    <div>
                      <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60">
                        UNHEALTHY
                      </p>
                      <h5 className="mb-2 font-bold dark:text-white">100</h5>
                    </div>
                  </div>
                  <div className="px-3 text-right basis-1/3">
                    <div className="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-emerald-500 to-teal-400">
                      <i className="ni leading-none ni-paper-diploma text-lg relative top-3.5 text-white"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-full px-3 sm:w-1/5 sm:flex-none xl:w-1/5">
            <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
              <div className="flex-auto p-4">
                <div className="flex flex-row -mx-3">
                  <div className="flex-none w-2/3 max-w-full px-3">
                    <div>
                      <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60">
                        UNACCEPTABLE
                      </p>
                      <h5 className="mb-2 font-bold dark:text-white">8</h5>
                    </div>
                  </div>
                  <div className="px-3 text-right basis-1/3">
                    <div className="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-orange-500 to-yellow-500">
                      <i className="ni leading-none ni-cart text-lg relative top-3.5 text-white"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap mt-6 mx-3 w-full">
            <div className="w-full max-w-full px-3 mt-0 lg:w-full lg:flex-none">
              <div className="border-black/12.5 dark:bg-slate-850 dark:shadow-dark-xl shadow-xl relative z-20 flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
                <div className="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid p-6 pt-4 pb-0">
                  {/* DATATABLE */}

                  <table class="divide-y divide-gray-300 w-full pt-3 m-3 rounded-t-2xl border-black/12.5 dark:shadow-dark-xl" id="dataTable">
                    <thead class="bg-violet-500">
                      <tr>
                        <th class="px-6 py-2 text-xs text-white">ID</th>
                        <th class="px-6 py-2 text-xs text-white">Name</th>
                        <th class="px-6 py-2 text-xs text-white">Email</th>
                        <th class="px-6 py-2 text-xs text-white">Created_at</th>
                        <th class="px-6 py-2 text-xs text-white">Edit</th>
                        <th class="px-6 py-2 text-xs text-white">Delete</th>
                      </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-300">
                      <tr class="text-center whitespace-nowrap">
                        <td class="px-6 py-4 text-sm text-gray-500">1</td>
                        <td class="px-6 py-4">
                          <div class="text-sm text-gray-900">Jon doe</div>
                        </td>
                        <td class="px-6 py-4">
                          <div class="text-sm text-gray-500">
                            jhondoe@example.com
                          </div>
                        </td>
                        <td class="px-6 py-4 text-sm text-gray-500">
                          2021-1-12
                        </td>
                        <td class="px-6 py-4">
                          <a href="/" class="inline-block text-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-6 h-6 text-blue-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                              />
                            </svg>
                          </a>
                        </td>
                        <td class="px-6 py-4">
                          <a href="/" class="inline-block text-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-6 h-6 text-red-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </a>
                        </td>
                      </tr>
                      <tr class="text-center whitespace-nowrap">
                        <td class="px-6 py-4 text-sm text-gray-500">2</td>
                        <td class="px-6 py-4">
                          <div class="text-sm text-gray-900">Jon doe 2</div>
                        </td>
                        <td class="px-6 py-4">
                          <div class="text-sm text-gray-500">
                            jhondoe2@example.com
                          </div>
                        </td>
                        <td class="px-6 py-4 text-sm text-gray-500">
                          2021-1-12
                        </td>
                        <td class="px-6 py-4">
                          <a href="/" class="inline-block text-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-6 h-6 text-blue-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                              />
                            </svg>
                          </a>
                        </td>
                        <td class="px-6 py-4">
                          <a href="/" class="inline-block text-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-6 h-6 text-red-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </a>
                        </td>
                      </tr>
                      <tr class="text-center whitespace-nowrap">
                        <td class="px-6 py-4 text-sm text-gray-500">3</td>
                        <td class="px-6 py-4">
                          <div class="text-sm text-gray-900">Jon doe 3</div>
                        </td>
                        <td class="px-6 py-4">
                          <div class="text-sm text-gray-500">
                            jhondoe3@example.com
                          </div>
                        </td>
                        <td class="px-6 py-4 text-sm text-gray-500">
                          2021-1-12
                        </td>
                        <td class="px-6 py-4">
                          <a href="/" class="inline-block text-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-6 h-6 text-blue-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                              />
                            </svg>
                          </a>
                        </td>
                        <td class="px-6 py-4">
                          <a href="/" class="inline-block text-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-6 h-6 text-red-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  {/* DATATABLE END */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sites;
