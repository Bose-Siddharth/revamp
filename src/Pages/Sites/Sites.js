import React from "react";

function Sites() {
  return (
    <>
      <div className="w-full px-6 py-6 mx-auto">
        <div className="flex flex-wrap -mx-3">
          <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/5">
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

          <div className="w-full max-w-full px-3 sm:w-1/2 sm:flex-none xl:w-1/5">
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
          <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/5">
            <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
              <div className="flex-auto p-4">
                <div className="flex flex-row -mx-3">
                  <div className="flex-none w-2/3 max-w-full px-3">
                    <div>
                      <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60">
                        Healthy
                      </p>
                      <h5 className="mb-2 font-bold dark:text-white">186</h5>
                    </div>
                  </div>
                  <div className="px-3 text-right basis-1/3">
                    <div className="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-red-600 to-orange-600">
                      <i className="ni leading-none ni-world text-lg relative top-3.5 text-white"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/5">
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
          <div className="w-full max-w-full px-3 sm:w-1/2 sm:flex-none xl:w-1/5">
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
          <div class="w-full max-w-full">
            <div class="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl rounded-2xl bg-clip-border">
              <div class="table-responsive">
                <table
                  class="table table-flush text-slate-500"
                  datatable
                  id="datatable-search"
                >
                  <thead class="thead-light">
                    <tr>
                      <th>Name</th>
                      <th>Position</th>
                      <th>Office</th>
                      <th>Age</th>
                      <th>Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="text-sm font-normal leading-normal">
                        Tiger Nixon
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        System Architect
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Edinburgh
                      </td>
                      <td class="text-sm font-normal leading-normal">61</td>
                      <td class="text-sm font-normal leading-normal">
                        $320,800
                      </td>
                    </tr>
                    <tr>
                      <td class="text-sm font-normal leading-normal">
                        Garrett Winters
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Accountant
                      </td>
                      <td class="text-sm font-normal leading-normal">Tokyo</td>
                      <td class="text-sm font-normal leading-normal">63</td>
                      <td class="text-sm font-normal leading-normal">
                        $170,750
                      </td>
                    </tr>
                    <tr>
                      <td class="text-sm font-normal leading-normal">
                        Ashton Cox
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Junior Technical Author
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        San Francisco
                      </td>
                      <td class="text-sm font-normal leading-normal">66</td>
                      <td class="text-sm font-normal leading-normal">
                        $86,000
                      </td>
                    </tr>
                    <tr>
                      <td class="text-sm font-normal leading-normal">
                        Cedric Kelly
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Senior Javascript Developer
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Edinburgh
                      </td>
                      <td class="text-sm font-normal leading-normal">22</td>
                      <td class="text-sm font-normal leading-normal">
                        $433,060
                      </td>
                    </tr>
                    <tr>
                      <td class="text-sm font-normal leading-normal">
                        Airi Satou
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Accountant
                      </td>
                      <td class="text-sm font-normal leading-normal">Tokyo</td>
                      <td class="text-sm font-normal leading-normal">33</td>
                      <td class="text-sm font-normal leading-normal">
                        $162,700
                      </td>
                    </tr>
                    <tr>
                      <td class="text-sm font-normal leading-normal">
                        Brielle Williamson
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Integration Specialist
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        New York
                      </td>
                      <td class="text-sm font-normal leading-normal">61</td>
                      <td class="text-sm font-normal leading-normal">
                        $372,000
                      </td>
                    </tr>
                    <tr>
                      <td class="text-sm font-normal leading-normal">
                        Herrod Chandler
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Sales Assistant
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        San Francisco
                      </td>
                      <td class="text-sm font-normal leading-normal">59</td>
                      <td class="text-sm font-normal leading-normal">
                        $137,500
                      </td>
                    </tr>
                    <tr>
                      <td class="text-sm font-normal leading-normal">
                        Rhona Davidson
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Integration Specialist
                      </td>
                      <td class="text-sm font-normal leading-normal">Tokyo</td>
                      <td class="text-sm font-normal leading-normal">55</td>
                      <td class="text-sm font-normal leading-normal">
                        $327,900
                      </td>
                    </tr>
                    <tr>
                      <td class="text-sm font-normal leading-normal">
                        Colleen Hurst
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Javascript Developer
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        San Francisco
                      </td>
                      <td class="text-sm font-normal leading-normal">39</td>
                      <td class="text-sm font-normal leading-normal">
                        $205,500
                      </td>
                    </tr>
                    <tr>
                      <td class="text-sm font-normal leading-normal">
                        Sonya Frost
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Software Engineer
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Edinburgh
                      </td>
                      <td class="text-sm font-normal leading-normal">23</td>
                      <td class="text-sm font-normal leading-normal">
                        $103,600
                      </td>
                    </tr>
                    <tr>
                      <td class="text-sm font-normal leading-normal">
                        Jena Gaines
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Office Manager
                      </td>
                      <td class="text-sm font-normal leading-normal">London</td>
                      <td class="text-sm font-normal leading-normal">30</td>
                      <td class="text-sm font-normal leading-normal">
                        $90,560
                      </td>
                    </tr>
                    <tr>
                      <td class="text-sm font-normal leading-normal">
                        Quinn Flynn
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Support Lead
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Edinburgh
                      </td>
                      <td class="text-sm font-normal leading-normal">22</td>
                      <td class="text-sm font-normal leading-normal">
                        $342,000
                      </td>
                    </tr>
                    <tr>
                      <td class="text-sm font-normal leading-normal">
                        Charde Marshall
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Regional Director
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        San Francisco
                      </td>
                      <td class="text-sm font-normal leading-normal">36</td>
                      <td class="text-sm font-normal leading-normal">
                        $470,600
                      </td>
                    </tr>
                    <tr>
                      <td class="text-sm font-normal leading-normal">
                        Haley Kennedy
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Senior Marketing Designer
                      </td>
                      <td class="text-sm font-normal leading-normal">London</td>
                      <td class="text-sm font-normal leading-normal">43</td>
                      <td class="text-sm font-normal leading-normal">
                        $313,500
                      </td>
                    </tr>
                    <tr>
                      <td class="text-sm font-normal leading-normal">
                        Tatyana Fitzpatrick
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Regional Director
                      </td>
                      <td class="text-sm font-normal leading-normal">London</td>
                      <td class="text-sm font-normal leading-normal">19</td>
                      <td class="text-sm font-normal leading-normal">
                        $385,750
                      </td>
                    </tr>
                    <tr>
                      <td class="text-sm font-normal leading-normal">
                        Michael Silva
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Marketing Designer
                      </td>
                      <td class="text-sm font-normal leading-normal">London</td>
                      <td class="text-sm font-normal leading-normal">66</td>
                      <td class="text-sm font-normal leading-normal">
                        $198,500
                      </td>
                    </tr>
                    <tr>
                      <td class="text-sm font-normal leading-normal">
                        Paul Byrd
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Chief Financial Officer (CFO)
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        New York
                      </td>
                      <td class="text-sm font-normal leading-normal">64</td>
                      <td class="text-sm font-normal leading-normal">
                        $725,000
                      </td>
                    </tr>
                    <tr>
                      <td class="text-sm font-normal leading-normal">
                        Gloria Little
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Systems Administrator
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        New York
                      </td>
                      <td class="text-sm font-normal leading-normal">59</td>
                      <td class="text-sm font-normal leading-normal">
                        $237,500
                      </td>
                    </tr>
                    <tr>
                      <td class="text-sm font-normal leading-normal">
                        Bradley Greer
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Software Engineer
                      </td>
                      <td class="text-sm font-normal leading-normal">London</td>
                      <td class="text-sm font-normal leading-normal">41</td>
                      <td class="text-sm font-normal leading-normal">
                        $132,000
                      </td>
                    </tr>
                    <tr>
                      <td class="text-sm font-normal leading-normal">
                        Dai Rios
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Personnel Lead
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Edinburgh
                      </td>
                      <td class="text-sm font-normal leading-normal">35</td>
                      <td class="text-sm font-normal leading-normal">
                        $217,500
                      </td>
                    </tr>
                    <tr>
                      <td class="text-sm font-normal leading-normal">
                        Jenette Caldwell
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Development Lead
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        New York
                      </td>
                      <td class="text-sm font-normal leading-normal">30</td>
                      <td class="text-sm font-normal leading-normal">
                        $345,000
                      </td>
                    </tr>
                    <tr>
                      <td class="text-sm font-normal leading-normal">
                        Yuri Berry
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Chief Marketing Officer (CMO)
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        New York
                      </td>
                      <td class="text-sm font-normal leading-normal">40</td>
                      <td class="text-sm font-normal leading-normal">
                        $675,000
                      </td>
                    </tr>
                    <tr>
                      <td class="text-sm font-normal leading-normal">
                        Caesar Vance
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Pre-Sales Support
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        New York
                      </td>
                      <td class="text-sm font-normal leading-normal">21</td>
                      <td class="text-sm font-normal leading-normal">
                        $106,450
                      </td>
                    </tr>
                    <tr>
                      <td class="text-sm font-normal leading-normal">
                        Doris Wilder
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Sales Assistant
                      </td>
                      <td class="text-sm font-normal leading-normal">Sidney</td>
                      <td class="text-sm font-normal leading-normal">23</td>
                      <td class="text-sm font-normal leading-normal">
                        $85,600
                      </td>
                    </tr>
                    <tr>
                      <td class="text-sm font-normal leading-normal">
                        Angelica Ramos
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Chief Executive Officer (CEO)
                      </td>
                      <td class="text-sm font-normal leading-normal">London</td>
                      <td class="text-sm font-normal leading-normal">47</td>
                      <td class="text-sm font-normal leading-normal">
                        $1,200,000
                      </td>
                    </tr>
                    <tr>
                      <td class="text-sm font-normal leading-normal">
                        Gavin Joyce
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Developer
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Edinburgh
                      </td>
                      <td class="text-sm font-normal leading-normal">42</td>
                      <td class="text-sm font-normal leading-normal">
                        $92,575
                      </td>
                    </tr>
                    <tr>
                      <td class="text-sm font-normal leading-normal">
                        Jennifer Chang
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Regional Director
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Singapore
                      </td>
                      <td class="text-sm font-normal leading-normal">28</td>
                      <td class="text-sm font-normal leading-normal">
                        $357,650
                      </td>
                    </tr>
                    <tr>
                      <td class="text-sm font-normal leading-normal">
                        Brenden Wagner
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Software Engineer
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        San Francisco
                      </td>
                      <td class="text-sm font-normal leading-normal">28</td>
                      <td class="text-sm font-normal leading-normal">
                        $206,850
                      </td>
                    </tr>
                    <tr>
                      <td class="text-sm font-normal leading-normal">
                        Fiona Green
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Chief Operating Officer (COO)
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        San Francisco
                      </td>
                      <td class="text-sm font-normal leading-normal">48</td>
                      <td class="text-sm font-normal leading-normal">
                        $850,000
                      </td>
                    </tr>
                    <tr>
                      <td class="text-sm font-normal leading-normal">
                        Shou Itou
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Regional Marketing
                      </td>
                      <td class="text-sm font-normal leading-normal">Tokyo</td>
                      <td class="text-sm font-normal leading-normal">20</td>
                      <td class="text-sm font-normal leading-normal">
                        $163,000
                      </td>
                    </tr>
                    <tr>
                      <td class="text-sm font-normal leading-normal">
                        Michelle House
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Integration Specialist
                      </td>
                      <td class="text-sm font-normal leading-normal">Sidney</td>
                      <td class="text-sm font-normal leading-normal">37</td>
                      <td class="text-sm font-normal leading-normal">
                        $95,400
                      </td>
                    </tr>
                    <tr>
                      <td class="text-sm font-normal leading-normal">
                        Suki Burks
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Developer
                      </td>
                      <td class="text-sm font-normal leading-normal">London</td>
                      <td class="text-sm font-normal leading-normal">53</td>
                      <td class="text-sm font-normal leading-normal">
                        $114,500
                      </td>
                    </tr>
                    <tr>
                      <td class="text-sm font-normal leading-normal">
                        Prescott Bartlett
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Technical Author
                      </td>
                      <td class="text-sm font-normal leading-normal">London</td>
                      <td class="text-sm font-normal leading-normal">27</td>
                      <td class="text-sm font-normal leading-normal">
                        $145,000
                      </td>
                    </tr>
                    <tr>
                      <td class="text-sm font-normal leading-normal">
                        Gavin Cortez
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Team Leader
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        San Francisco
                      </td>
                      <td class="text-sm font-normal leading-normal">22</td>
                      <td class="text-sm font-normal leading-normal">
                        $235,500
                      </td>
                    </tr>
                    <tr>
                      <td class="text-sm font-normal leading-normal">
                        Martena Mccray
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Post-Sales support
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Edinburgh
                      </td>
                      <td class="text-sm font-normal leading-normal">46</td>
                      <td class="text-sm font-normal leading-normal">
                        $324,050
                      </td>
                    </tr>
                    <tr>
                      <td class="text-sm font-normal leading-normal">
                        Unity Butler
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Marketing Designer
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        San Francisco
                      </td>
                      <td class="text-sm font-normal leading-normal">47</td>
                      <td class="text-sm font-normal leading-normal">
                        $85,675
                      </td>
                    </tr>
                    <tr>
                      <td class="text-sm font-normal leading-normal">
                        Howard Hatfield
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Office Manager
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        San Francisco
                      </td>
                      <td class="text-sm font-normal leading-normal">51</td>
                      <td class="text-sm font-normal leading-normal">
                        $164,500
                      </td>
                    </tr>
                    <tr>
                      <td class="text-sm font-normal leading-normal">
                        Hope Fuentes
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Secretary
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        San Francisco
                      </td>
                      <td class="text-sm font-normal leading-normal">41</td>
                      <td class="text-sm font-normal leading-normal">
                        $109,850
                      </td>
                    </tr>
                    <tr>
                      <td class="text-sm font-normal leading-normal">
                        Vivian Harrell
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Financial Controller
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        San Francisco
                      </td>
                      <td class="text-sm font-normal leading-normal">62</td>
                      <td class="text-sm font-normal leading-normal">
                        $452,500
                      </td>
                    </tr>
                    <tr>
                      <td class="text-sm font-normal leading-normal">
                        Timothy Mooney
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Office Manager
                      </td>
                      <td class="text-sm font-normal leading-normal">London</td>
                      <td class="text-sm font-normal leading-normal">37</td>
                      <td class="text-sm font-normal leading-normal">
                        $136,200
                      </td>
                    </tr>
                    <tr>
                      <td class="text-sm font-normal leading-normal">
                        Jackson Bradshaw
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Director
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        New York
                      </td>
                      <td class="text-sm font-normal leading-normal">65</td>
                      <td class="text-sm font-normal leading-normal">
                        $645,750
                      </td>
                    </tr>
                    <tr>
                      <td class="text-sm font-normal leading-normal">
                        Olivia Liang
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Support Engineer
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Singapore
                      </td>
                      <td class="text-sm font-normal leading-normal">64</td>
                      <td class="text-sm font-normal leading-normal">
                        $234,500
                      </td>
                    </tr>
                    <tr>
                      <td class="text-sm font-normal leading-normal">
                        Bruno Nash
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Software Engineer
                      </td>
                      <td class="text-sm font-normal leading-normal">London</td>
                      <td class="text-sm font-normal leading-normal">38</td>
                      <td class="text-sm font-normal leading-normal">
                        $163,500
                      </td>
                    </tr>
                    <tr>
                      <td class="text-sm font-normal leading-normal">
                        Sakura Yamamoto
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Support Engineer
                      </td>
                      <td class="text-sm font-normal leading-normal">Tokyo</td>
                      <td class="text-sm font-normal leading-normal">37</td>
                      <td class="text-sm font-normal leading-normal">
                        $139,575
                      </td>
                    </tr>
                    <tr>
                      <td class="text-sm font-normal leading-normal">
                        Thor Walton
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Developer
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        New York
                      </td>
                      <td class="text-sm font-normal leading-normal">61</td>
                      <td class="text-sm font-normal leading-normal">
                        $98,540
                      </td>
                    </tr>
                    <tr>
                      <td class="text-sm font-normal leading-normal">
                        Finn Camacho
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Support Engineer
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        San Francisco
                      </td>
                      <td class="text-sm font-normal leading-normal">47</td>
                      <td class="text-sm font-normal leading-normal">
                        $87,500
                      </td>
                    </tr>
                    <tr>
                      <td class="text-sm font-normal leading-normal">
                        Serge Baldwin
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Data Coordinator
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Singapore
                      </td>
                      <td class="text-sm font-normal leading-normal">64</td>
                      <td class="text-sm font-normal leading-normal">
                        $138,575
                      </td>
                    </tr>
                    <tr>
                      <td class="text-sm font-normal leading-normal">
                        Zenaida Frank
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Software Engineer
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        New York
                      </td>
                      <td class="text-sm font-normal leading-normal">63</td>
                      <td class="text-sm font-normal leading-normal">
                        $125,250
                      </td>
                    </tr>
                    <tr>
                      <td class="text-sm font-normal leading-normal">
                        Zorita Serrano
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Software Engineer
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        San Francisco
                      </td>
                      <td class="text-sm font-normal leading-normal">56</td>
                      <td class="text-sm font-normal leading-normal">
                        $115,000
                      </td>
                    </tr>
                    <tr>
                      <td class="text-sm font-normal leading-normal">
                        Jennifer Acosta
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Junior Javascript Developer
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Edinburgh
                      </td>
                      <td class="text-sm font-normal leading-normal">43</td>
                      <td class="text-sm font-normal leading-normal">
                        $75,650
                      </td>
                    </tr>
                    <tr>
                      <td class="text-sm font-normal leading-normal">
                        Cara Stevens
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Sales Assistant
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        New York
                      </td>
                      <td class="text-sm font-normal leading-normal">46</td>
                      <td class="text-sm font-normal leading-normal">
                        $145,600
                      </td>
                    </tr>
                    <tr>
                      <td class="text-sm font-normal leading-normal">
                        Hermione Butler
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Regional Director
                      </td>
                      <td class="text-sm font-normal leading-normal">London</td>
                      <td class="text-sm font-normal leading-normal">47</td>
                      <td class="text-sm font-normal leading-normal">
                        $356,250
                      </td>
                    </tr>
                    <tr>
                      <td class="text-sm font-normal leading-normal">
                        Lael Greer
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Systems Administrator
                      </td>
                      <td class="text-sm font-normal leading-normal">London</td>
                      <td class="text-sm font-normal leading-normal">21</td>
                      <td class="text-sm font-normal leading-normal">
                        $103,500
                      </td>
                    </tr>
                    <tr>
                      <td class="text-sm font-normal leading-normal">
                        Jonas Alexander
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Developer
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        San Francisco
                      </td>
                      <td class="text-sm font-normal leading-normal">30</td>
                      <td class="text-sm font-normal leading-normal">
                        $86,500
                      </td>
                    </tr>
                    <tr>
                      <td class="text-sm font-normal leading-normal">
                        Shad Decker
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Regional Director
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Edinburgh
                      </td>
                      <td class="text-sm font-normal leading-normal">51</td>
                      <td class="text-sm font-normal leading-normal">
                        $183,000
                      </td>
                    </tr>
                    <tr>
                      <td class="text-sm font-normal leading-normal">
                        Michael Bruce
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Javascript Developer
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Singapore
                      </td>
                      <td class="text-sm font-normal leading-normal">29</td>
                      <td class="text-sm font-normal leading-normal">
                        $183,000
                      </td>
                    </tr>
                    <tr>
                      <td class="text-sm font-normal leading-normal">
                        Donna Snider
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        Customer Support
                      </td>
                      <td class="text-sm font-normal leading-normal">
                        New York
                      </td>
                      <td class="text-sm font-normal leading-normal">27</td>
                      <td class="text-sm font-normal leading-normal">
                        $112,000
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DATATABLE */}
      {/* DATATABLE END */}
    </>
  );
}

export default Sites;
