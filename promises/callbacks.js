const func1 = func2 => {
  const value = "Hello World!"

  func2(value)
}

func1(number => {
  console.log(number)
})