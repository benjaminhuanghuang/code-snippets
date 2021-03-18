
class SysProperty {
  public static void main(String[] args) {
    System.getProperties().list(System.out);


    final String initiaClasspath = System.getProperty("java.class.path");

    /*
      设置环境变量或在启动JVM时设置classpath。实际上就是给java命令传入-classpath或-cp参数：
      java -cp /Users/bhuang/ben-github/code-snippets/system-info
      没有设置系统环境变量，也没有传入-cp参数，那么JVM默认的classpath为.，即当前目录
    */
    System.out.println("java.class.path = " + initiaClasspath);
  }
}