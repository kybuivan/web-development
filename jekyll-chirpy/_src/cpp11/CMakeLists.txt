set_property(DIRECTORY PROPERTY LABELS 11)

set(names
  class-template
)

foreach(t IN LISTS names)
  add_executable(${t} ${t}.cpp)
  add_test(NAME ${t} COMMAND ${t})
endforeach()
