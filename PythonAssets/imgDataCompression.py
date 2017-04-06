from pgmConvert import pgm

f = open('outCompressionTest.txt', 'w')
var = pgm("roomba_hall.pgm")

x = 0

while x < len(var.bytes):
    if str(var.bytes[x]) != "205":
        f.write(str(var.bytes[x]) + " ")
        x += 1
    elif str(var.bytes[x]) == "205":
        counter = x
        while str(var.bytes[counter]) == "205":
            if(counter < len(var.bytes) - 1):
                counter += 1
            else:
                break
            
        f.write('[' + str(counter - x) + ']' + ' ')
        x = counter + 1
    
print len(var.bytes)
print var.width
print "DONE"
