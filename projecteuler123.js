class Problem123
  def self.find_ans
    limit = 10**10 ; i = 3 ; n = 1
    loop do
      if prime?(i)
        if n % 2 === 1
          n += 1
        else
          n += 1
          value = 2*n*i
          return n if value > limit
        end
      end
      i += 2
    end
  end
  def self.prime?(n)
    2.upto(Math.sqrt(n)){ |i| return false if n % i === 0 }
    return true
  end
end
start = Time.now
p Problem123.find_ans
p Time.now - start