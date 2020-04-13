
# Python program to write 
# text on video 
  
from PIL import ImageFont, ImageDraw, Image  
import cv2 
  
  
cap = cv2.VideoCapture('demo.mp4') 
frame_width = int(cap.get(3))
frame_height = int(cap.get(4))

out = cv2.VideoWriter('outpy.mp4',cv2.VideoWriter_fourcc('M','J','P','G'), 60, (frame_width,frame_height))

	 
while(cap.isOpened()): 
      
    # Capture frames in the video 
    ret, frame = cap.read() 
  
    # describe the type of font 
    # to be used. 
    font = cv2.FONT_HERSHEY_SIMPLEX 
  
    # Use putText() method for 
    # inserting text on video 
    cv2.putText(frame,  
                'Placeholder Vid',  
                (350, 450),  
                font, 1,  
                (255, 255, 255),  
                2,  
                cv2.LINE_4) 
  
    # Display the resulting frame 
    if ret == True:
        out.write(frame)
        cv2.imshow('video', frame) 
    else:
        break
  
    # creating 'q' as the quit  
    # button for the video 
    if cv2.waitKey(1) & 0xFF == ord('q'): 
        break
  
# release the cap object 
cap.release() 
out.release()
# close all windows 
cv2.destroyAllWindows() 
