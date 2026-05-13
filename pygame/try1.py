import pygame as py

py.init()

screen = py.display.set_mode((1000,1000))

clock = py.time.Clock()
running= True

x=0
y=0


square = py.draw.circle(screen,"red",(x,y),5)

while running:
    
    for event in py.event.get():
        if event.type == py.QUIT:
            running = False

    

    keys = py.key.get_pressed()
    if keys[py.K_UP] or keys[py.K_w]:
        y-=2
    if keys[py.K_DOWN] or keys[py.K_s]:
        y+=2
    

        
        
    screen.fill("black")

    py.display.flip()

    clock.tick(60)



py.quit()