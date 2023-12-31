cmake_minimum_required(VERSION 3.20...3.26)
# CMake 3.20 is oldest version supporting C++23

project(CppTemplates LANGUAGES CXX)

enable_testing()

option(tidy "Run clang-tidy")

message(STATUS "CMake ${CMAKE_VERSION}")

set(CMAKE_CXX_STANDARD 23)

if(tidy)
  find_program(CLANG_TIDY
    NAMES clang-tidy
    REQUIRED
    PATHS /opt/homebrew/opt/llvm/bin
  )

  set(CMAKE_CXX_CLANG_TIDY ${CLANG_TIDY})

endif()

include(cmake/compilers.cmake)

add_subdirectory(cpp11)
#add_subdirectory(cpp14)
#add_subdirectory(cpp17)
#add_subdirectory(cpp20)
#add_subdirectory(cpp23)

file(GENERATE OUTPUT .gitignore CONTENT "*")
