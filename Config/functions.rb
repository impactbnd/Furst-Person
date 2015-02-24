def Kernel.includeFile(type,topping,num=[])
	if File.exist?("#{$pathName}/Custom_"+type+"/"+topping+".haml")
		Haml::Engine.new(File.read("#{$pathName}/Custom_"+type+"/"+topping+".haml")).render(Object.new, num) 
	else 
		Haml::Engine.new(File.read("#{$pathName}/Deli_"+type+"/"+topping+".haml")).render(Object.new, num)
	end
end

def Kernel.putss(someVar)

end

def Kernel.loadAll(folderName)
	scripts = []
	scripts = Dir.entries(folderName)-['.','..']
end
