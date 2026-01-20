'use client'

import { useState, useMemo } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CarCard, { Car } from '@/components/CarCard'
import { Input } from '@/components/ui/input'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import { PriceRangeSlider } from '@/components/ui/price-range-slider'
import { Button } from '@/components/ui/button'
import { Search, Filter, ChevronLeft, ChevronRight, X } from 'lucide-react'

// Mock data - Replace with actual API call
const mockCars: Car[] = [
  {
    id: '1',
    name: 'HYUNDAI ACCENT',
    year: 2023,
    image: 'https://cdn.autoxuyenviet.com/assets/media/products/860~1720520653_lI_KqWiam5Q2WG42MY4qVDNH.jpg',
    transmission: 'automatic',
    seats: 5,
    fuel: 'gasoline',
    location: 'Phường 04, Quận Tân Bình',
    rating: 5.0,
    trips: 39,
    pricePerDay: 675,
    originalPrice: 775,
    discount: 15,
    shortTermPrice: 465,
    shortTermHours: 4,
    featured: true,
    noCollateral: true,
  },
  {
    id: '2',
    name: 'TOYOTA VIOS',
    year: 2023,
    image: 'https://images2.thanhnien.vn/528068263637045248/2023/5/8/toyota-vios-11-16835401585491256311899.jpg',
    transmission: 'automatic',
    seats: 5,
    fuel: 'gasoline',
    location: 'Phường 05, Quận Tân Bình',
    rating: 4.8,
    trips: 52,
    pricePerDay: 750,
    featured: false,
    noCollateral: true,
  },
  {
    id: '3',
    name: 'HONDA CITY',
    year: 2024,
    image: 'https://hondavinh.net/wp-content/uploads/2024/02/honda-city-2024-2.jpg',
    transmission: 'automatic',
    seats: 5,
    fuel: 'gasoline',
    location: 'Phường 06, Quận Tân Bình',
    rating: 4.9,
    trips: 28,
    pricePerDay: 800,
    originalPrice: 900,
    discount: 11,
    featured: true,
    noCollateral: false,
  },
  {
    id: '4',
    name: 'MAZDA 3',
    year: 2023,
    image: 'https://drive.gianhangvn.com/image/2et5xsy-2745308j31311.jpg',
    transmission: 'automatic',
    seats: 5,
    fuel: 'gasoline',
    location: 'Phường 07, Quận Tân Bình',
    rating: 5.0,
    trips: 15,
    pricePerDay: 950,
    featured: false,
    noCollateral: true,
  },
  {
    id: '5',
    name: 'KIA CERATO',
    year: 2023,
    image: 'https://image.danchoioto.vn/kia/cerato/2021/kia-cerato-ngoai-that-1.jpg',
    transmission: 'automatic',
    seats: 5,
    fuel: 'gasoline',
    location: 'Phường 08, Quận Tân Bình',
    rating: 4.7,
    trips: 33,
    pricePerDay: 850,
    originalPrice: 950,
    discount: 10,
    featured: false,
    noCollateral: false,
  },
  {
    id: '6',
    name: 'HYUNDAI ELANTRA',
    year: 2024,
    image: 'https://hyundai-thuduc.vn/wp-content/uploads/2021/11/gia-xe-Hyundai-Elantra-2023-1.jpg',
    transmission: 'automatic',
    seats: 5,
    fuel: 'gasoline',
    location: 'Phường 09, Quận Tân Bình',
    rating: 4.9,
    trips: 21,
    pricePerDay: 900,
    featured: true,
    noCollateral: true,
  },
  {
    id: '7',
    name: 'TOYOTA COROLLA',
    year: 2023,
    image: 'https://i1-vnexpress.vnecdn.net/2023/10/04/Toyota-Altis-2023-0.jpg?w=2400&h=0&q=100&dpr=1&fit=crop&s=t8rtcuoDE80-reQXk7lKlA&t=image',
    transmission: 'automatic',
    seats: 5,
    fuel: 'gasoline',
    location: 'Phường 10, Quận Tân Bình',
    rating: 5.0,
    trips: 45,
    pricePerDay: 1000,
    featured: false,
    noCollateral: true,
  },
  {
    id: '8',
    name: 'HONDA CIVIC',
    year: 2024,
    image: 'https://drive.gianhangvn.com/image/honda-civic-1-5l-rs-2022-2721726j32217.jpg',
    transmission: 'automatic',
    seats: 5,
    fuel: 'gasoline',
    location: 'Phường 11, Quận Tân Bình',
    rating: 4.8,
    trips: 38,
    pricePerDay: 1100,
    originalPrice: 1200,
    discount: 8,
    featured: true,
    noCollateral: false,
  },
  {
    id: '9',
    name: 'FORD FOCUS',
    year: 2023,
    image: 'https://fordassured.com.vn/gw-content/images/z453018944451938d252f6ad77ea2a44cc3a37aae33d5e-XQZYu.jpg',
    transmission: 'automatic',
    seats: 5,
    fuel: 'gasoline',
    location: 'Phường 12, Quận Tân Bình',
    rating: 4.6,
    trips: 19,
    pricePerDay: 850,
    featured: false,
    noCollateral: true,
  },
  {
    id: '10',
    name: 'NISSAN ALTIMA',
    year: 2023,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_50kEHgVwujipAR_DKLbvILy_F9vot93dnA&s',
    transmission: 'automatic',
    seats: 5,
    fuel: 'gasoline',
    location: 'Phường 13, Quận Tân Bình',
    rating: 4.7,
    trips: 26,
    pricePerDay: 900,
    originalPrice: 1000,
    discount: 10,
    featured: false,
    noCollateral: true,
  },
  {
    id: '11',
    name: 'HYUNDAI SONATA',
    year: 2024,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPph_zPlljO0v_RtxubSYB4CW6eHNSt3dn2Q&s',
    transmission: 'automatic',
    seats: 5,
    fuel: 'gasoline',
    location: 'Phường 14, Quận Tân Bình',
    rating: 4.9,
    trips: 31,
    pricePerDay: 1200,
    featured: true,
    noCollateral: true,
  },
  {
    id: '12',
    name: 'TOYOTA CAMRY',
    year: 2023,
    image: 'https://www.355toyota.com/static/dealer-18151/darcars-toyota-rockville_camry-trim-levels-ls3-.jpg',
    transmission: 'automatic',
    seats: 5,
    fuel: 'gasoline',
    location: 'Phường 15, Quận Tân Bình',
    rating: 5.0,
    trips: 42,
    pricePerDay: 1300,
    originalPrice: 1400,
    discount: 7,
    featured: false,
    noCollateral: true,
  },
]

const ITEMS_PER_PAGE = 10

// Calculate min and max prices from mock data
const PRICE_MIN = Math.min(...mockCars.map(car => car.pricePerDay))
const PRICE_MAX = Math.max(...mockCars.map(car => car.pricePerDay))

export default function CarListingsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [transmissionFilter, setTransmissionFilter] = useState<string>('all')
  const [seatsFilter, setSeatsFilter] = useState<string>('all')
  const [priceRange, setPriceRange] = useState<[number, number]>([PRICE_MIN, PRICE_MAX])
  const [currentPage, setCurrentPage] = useState(1)
  const [showFilters, setShowFilters] = useState(false)

  // Filter and search logic
  const filteredCars = useMemo(() => {
    return mockCars.filter((car) => {
      // Search by name
      const matchesSearch = car.name.toLowerCase().includes(searchQuery.toLowerCase())
      
      // Filter by transmission
      const matchesTransmission = 
        transmissionFilter === 'all' || 
        car.transmission === transmissionFilter
      
      // Filter by seats
      const matchesSeats = 
        seatsFilter === 'all' || 
        car.seats.toString() === seatsFilter
      
      // Filter by price range
      const matchesPrice = 
        car.pricePerDay >= priceRange[0] && car.pricePerDay <= priceRange[1]
      
      return matchesSearch && matchesTransmission && matchesSeats && matchesPrice
    })
  }, [searchQuery, transmissionFilter, seatsFilter, priceRange])

  // Pagination
  const totalPages = Math.ceil(filteredCars.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const paginatedCars = filteredCars.slice(startIndex, endIndex)

  // Reset to page 1 when filters change
  const handleFilterChange = () => {
    setCurrentPage(1)
  }

  const clearFilters = () => {
    setSearchQuery('')
    setTransmissionFilter('all')
    setSeatsFilter('all')
    setPriceRange([PRICE_MIN, PRICE_MAX])
    setCurrentPage(1)
  }

  const hasActiveFilters = 
    searchQuery !== '' || 
    transmissionFilter !== 'all' || 
    seatsFilter !== 'all' || 
    priceRange[0] !== PRICE_MIN || 
    priceRange[1] !== PRICE_MAX

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 flex flex-col">
      <Header />
      <main className="flex-1 pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
              Danh sách xe
            </h1>
            <p className="text-slate-600">
              Tìm kiếm và lựa chọn xe phù hợp với nhu cầu của bạn
            </p>
          </div>

          {/* Search and Filter Bar */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-200 mb-8">
            {/* Search Section */}
            <div className="p-5 md:p-6 border-b border-gray-100">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none" />
                <Input
                  type="text"
                  placeholder="Tìm kiếm theo tên xe..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value)
                    handleFilterChange()
                  }}
                  className="pl-12 pr-4 h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition-colors duration-200"
                />
              </div>
            </div>

            {/* Filters Section */}
            <div className="p-5 md:p-6">
              {/* Filter Toggle Button (Mobile) */}
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden w-full mb-4 cursor-pointer border-gray-300 hover:bg-gray-50 transition-colors duration-200"
              >
                <Filter className="h-4 w-4 mr-2" />
                {showFilters ? 'Ẩn bộ lọc' : 'Hiển thị bộ lọc'}
              </Button>

              {/* Filters Grid */}
              <div className={`${showFilters ? 'block' : 'hidden'} md:block`}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Transmission Filter */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 block">
                      Loại hộp số
                    </label>
                    <Select
                      value={transmissionFilter}
                      onValueChange={(value) => {
                        setTransmissionFilter(value)
                        handleFilterChange()
                      }}
                    >
                      <SelectTrigger className="w-full h-11 cursor-pointer border-gray-300 hover:border-gray-400 transition-colors duration-200">
                        <SelectValue placeholder="Chọn loại hộp số" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Tất cả</SelectItem>
                        <SelectItem value="automatic">Số tự động</SelectItem>
                        <SelectItem value="manual">Số sàn</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Seats Filter */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 block">
                      Số chỗ ngồi
                    </label>
                    <Select
                      value={seatsFilter}
                      onValueChange={(value) => {
                        setSeatsFilter(value)
                        handleFilterChange()
                      }}
                    >
                      <SelectTrigger className="w-full h-11 cursor-pointer border-gray-300 hover:border-gray-400 transition-colors duration-200">
                        <SelectValue placeholder="Chọn số chỗ ngồi" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Tất cả</SelectItem>
                        <SelectItem value="4">4 chỗ</SelectItem>
                        <SelectItem value="5">5 chỗ</SelectItem>
                        <SelectItem value="7">7 chỗ</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Price Filter */}
                  <div className="space-y-2 sm:col-span-2 lg:col-span-2">
                    <label className="text-sm font-medium text-slate-700 block">
                      Mức giá
                      {priceRange[0] !== PRICE_MIN || priceRange[1] !== PRICE_MAX ? (
                        <span className="ml-2 text-xs font-normal text-slate-500">
                          ({priceRange[0].toLocaleString('vi-VN')}K - {priceRange[1].toLocaleString('vi-VN')}K)
                        </span>
                      ) : null}
                    </label>
                    <PriceRangeSlider
                      min={PRICE_MIN}
                      max={PRICE_MAX}
                      value={priceRange}
                      onChange={(newRange) => {
                        setPriceRange(newRange)
                        handleFilterChange()
                      }}
                      step={50}
                    />
                  </div>

                  {/* Clear Filters Button */}
                  {hasActiveFilters && (
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 block opacity-0">
                        Thao tác
                      </label>
                      <Button
                        variant="outline"
                        onClick={clearFilters}
                        className="w-full h-11 cursor-pointer border-red-300 text-red-600 hover:bg-red-50 hover:border-red-400 transition-colors duration-200"
                      >
                        <X className="h-4 w-4 mr-2" />
                        Xóa bộ lọc
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6 flex items-center justify-between">
            <p className="text-slate-600 text-sm md:text-base">
              Tìm thấy <span className="font-semibold text-slate-900">{filteredCars.length}</span> xe
              {hasActiveFilters && (
                <span className="ml-2 text-slate-500 text-xs md:text-sm">
                  (đã lọc)
                </span>
              )}
            </p>
          </div>

          {/* Car Grid */}
          {paginatedCars.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {paginatedCars.map((car) => (
                  <CarCard key={car.id} car={car} />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-8 border-t border-gray-200">
                  {/* Results Info */}
                  <div className="text-sm text-slate-600">
                    Hiển thị <span className="font-semibold text-slate-900">{startIndex + 1}</span> -{' '}
                    <span className="font-semibold text-slate-900">
                      {Math.min(endIndex, filteredCars.length)}
                    </span>{' '}
                    trong tổng số <span className="font-semibold text-slate-900">{filteredCars.length}</span> xe
                  </div>

                  {/* Pagination Controls */}
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                      disabled={currentPage === 1}
                      className="h-10 px-4 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-white border-gray-300 hover:bg-gray-50 transition-colors duration-200"
                    >
                      <ChevronLeft className="h-4 w-4 mr-1" />
                      <span className="hidden sm:inline">Trước</span>
                    </Button>
                    
                    <div className="flex items-center gap-1">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                        if (
                          page === 1 ||
                          page === totalPages ||
                          (page >= currentPage - 1 && page <= currentPage + 1)
                        ) {
                          return (
                            <Button
                              key={page}
                              variant={currentPage === page ? 'default' : 'outline'}
                              onClick={() => setCurrentPage(page)}
                              className={`h-10 min-w-[40px] cursor-pointer transition-all duration-200 ${
                                currentPage === page
                                  ? 'bg-blue-600 hover:bg-blue-700 text-white border-blue-600 shadow-sm'
                                  : 'border-gray-300 hover:bg-gray-50 hover:border-gray-400'
                              }`}
                            >
                              {page}
                            </Button>
                          )
                        } else if (
                          page === currentPage - 2 ||
                          page === currentPage + 2
                        ) {
                          return (
                            <span key={page} className="px-2 text-slate-400 font-medium">
                              ...
                            </span>
                          )
                        }
                        return null
                      })}
                    </div>

                    <Button
                      variant="outline"
                      onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                      disabled={currentPage === totalPages}
                      className="h-10 px-4 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-white border-gray-300 hover:bg-gray-50 transition-colors duration-200"
                    >
                      <span className="hidden sm:inline">Sau</span>
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16 px-4">
              <div className="max-w-md mx-auto">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100">
                  <Search className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Không tìm thấy xe nào phù hợp
                </h3>
                <p className="text-slate-600 mb-6">
                  Thử điều chỉnh bộ lọc hoặc từ khóa tìm kiếm của bạn
                </p>
                {hasActiveFilters && (
                  <Button
                    variant="outline"
                    onClick={clearFilters}
                    className="cursor-pointer border-gray-300 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <X className="h-4 w-4 mr-2" />
                    Xóa tất cả bộ lọc
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

