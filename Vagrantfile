# -*- mode: ruby -*-
# vi: set ft=ruby :

VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
	config.vm.box = "ubuntu/trusty64"

	config.vm.network "private_network", ip: "192.168.33.10"

	config.hostmanager.enabled = true
	config.hostmanager.manage_host = true
	config.vm.hostname = "fast.dev"

	config.vm.network "public_network"

	config.trigger.after :up do
		info "Starting mailcatcher..."
		run "vagrant ssh -c 'mailcatcher --http-ip=0.0.0.0'"
	end

	config.trigger.before :halt do
		info "Dumping the database..."
		run "vagrant ssh -c 'mysqldump -uroot -p123 vagrantdb > /vagrant/db/dump.sql'"
	end

	config.vm.synced_folder ".", "/vagrant", nfs: true

	config.vm.provider "virtualbox" do |vb|
		# Don't boot with headless mode
		#vb.gui = true

	# Use VBoxManage to customize the VM. For example to change memory:
		vb.customize ["modifyvm", :id, "--memory", "512"]
		vb.customize ["modifyvm", :id, "--ioapic", "off"]
	end

	config.vm.provision :shell, :path => "puppet/install.sh"

	config.vm.provision "puppet" do |puppet|
		puppet.manifests_path = "puppet/manifests"
		puppet.module_path = "puppet/modules"
		puppet.manifest_file  = "init.pp"
	end
end
