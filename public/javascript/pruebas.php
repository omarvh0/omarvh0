import java.io.File;


       
    File file1 = new File("sampleFile.txt");
    File file2 = new File("xyz.txt");

    //Checks if file1 exists
    if(file1.exists() && !file1.isDirectory()){
        System.out.println(file1 + " Exists");
    }else{
        System.out.println(file1 + " Does not exists");
    }

    //Checks if file2 exists
    if(file2.exists()){
        System.out.println(file2 + " Exists");
    }else{
        System.out.println(file2 + " Does not exists");
    }
     
