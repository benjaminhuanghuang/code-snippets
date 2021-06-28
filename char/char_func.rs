fn uppercase(c: u8) -> u8 {
  match c {
      b'a'...b'z' => c - 32,    // b means ASCII byte literal
      _ => c,
  }
}

fn uppercase(c: u8) -> u8 {
  if let b'a'...b'z' = c {
      c - 32
  } else {
      c
  }
}


fn is_alphanumeric(c: char) -> bool {
  match c {
      'a'...'z' | 'A'...'Z' | '0'...'9' => true,
      _ => false,
  }
}


